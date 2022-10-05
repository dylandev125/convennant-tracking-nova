<?php

namespace Acme\Calendar\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Storage;
use Carbon\Carbon;
use Illuminate\Support\Str;
use PHPMailer\PHPMailer\PHPMailer;

//use Illuminate\Http\UploadedFile;

class CalendarController extends Controller
{
    //
    public function fetchData(Request $request)
    {

        $tracking_data = DB::select("
            SELECT
                compliances_covenant_instances.id, compliances_covenant_instances.covenantId, compliances_covenant_instances.`status`, compliances_covenant_instances.activateDate as trackingDate,
                compliances_covenants.complianceId, compliances_covenants.type, compliances_covenants.subType,
                compliances.clcode, compliances.docName, compliances.startDate, compliances.endDate, compliances.mailCC
            FROM
                compliances_covenant_instances
                LEFT JOIN compliances_covenants ON compliances_covenant_instances.covenantId = compliances_covenants.id
                LEFT JOIN compliances ON compliances_covenants.complianceId = compliances.id
        ");

        echo json_encode($tracking_data);
        die;
    }

    public function submitResult(Request $request) {
        $status = $request->status;
        $resolution = $request->resolution;
        $comments = $request->comments;
        $instanceId = $request->instanceId;
        $covenantId = $request->covenantId;
        $resolutionStatus = $request->resolutionStatus;
        $mailCC = $request->mailCC;
        $notifyCheck = $request->notifyCheck;
        $uuid = $request->uuid;

        $fileUris = array();

        if($request->hasFile('files')) {
            foreach($request->file('files') as $file) {
                
                $name = time() . $file->getClientOriginalName();
                $path = Storage::disk('s3')->put($name, file_get_contents($file));
                $path = Storage::disk('s3')->url($path);

                array_push($fileUris, $path);
            }
        }

        $today = date("Y-m-d");

        // $sharedKey = DB::select("
        //     SELECT shared_key from encrypt_store WHERE uuid = '$uuid'
        // ");

        // if(!$sharedKey) return response()->json(['error' => 'invalid sharedKey'], 422);

        $encryptedEmail = base64_decode($mailCC);

        // get the first 16 bytes from the payload (must match the IV byte length)
        $iv = mb_substr($encryptedEmail,0, 16, '8bit');

        // get the encrypted value part (should match the rest of the payload)
        $encrypted = mb_substr($encryptedEmail, 16, null, '8bit');

        $decrypted_key = 'FUKyw2BKb9rsRTpvUsP1X1zeuSISxwQ6';
        // decrypt the value
        $decryptedEmail = openssl_decrypt(
        $encrypted,
        'aes-256-cbc',
        $decrypted_key,
        OPENSSL_RAW_DATA,
        $iv
        );

        var_dump($decryptedEmail);

        // DB::table('compliances_covenants_tracking')
        //     ->insert([
        //         'resolutionValue' => $resolution,
        //         "uploads"=> json_encode($fileUris),
        //         'comments'=>$comments,
        //         'resolutionStatus' => $resolutionStatus,
        //         'instanceId' => $instanceId,
        //         'covenantId' => $covenantId,
        //         'trackingDate' => $today,
        //         'status' => $status
        //     ]);

        // if ($notifyCheck) {
        //     $content = '<h1>hello world</h1>';
        //     $this->sendEmail($content, $decryptedEmail);
        // }
        // return response()->json(['result'=>'success']);

        die;
    }

    public function fetchCovenant(Request $request)
    {
        $standard_covenants = DB::table('standard_covenants')
            ->select('type')
            ->groupBy('type')
            ->get();

        $covenant_data = [];
        $i = 0;
        foreach ($standard_covenants as $covenant) {
            $covenant_data[$i]['type'] = $covenant->type;
            $i++;
        }

        echo json_encode($covenant_data);
        die;
    }

    public function encryptKey(Request $request) {
        $publicKey = $request->get('publicKey');

        // generate a random string to be used as shared key
        $sharedKey = Str::random(32);
        
        // encrypt the shared key using the client's public key
        openssl_public_encrypt($sharedKey, $encryptedKey, $publicKey, OPENSSL_PKCS1_PADDING);
        $uuid = Str::uuid();

        DB::table('encrypt_store')
        ->insert([
            'uuid' => $uuid,
            'shared_key' => $sharedKey,
            'expires_at' => Carbon::now()->addMinutes(5),
        ]);

        return response()->json([
            'encryptedKey' => base64_encode($encryptedKey),
            'uuid' => $uuid, // uuid string
        ]);
    }

    public function sendEmail($mailContent, $toEmail)
    {
        require base_path("vendor/autoload.php");
        $mail = new PHPMailer;

        // Server settings 
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;    //Enable verbose debug output 
        $mail->isSMTP();                            // Set mailer to use SMTP 
        $mail->Host = 'smtp.hostinger.com';         // Specify main and backup SMTP servers 
        $mail->SMTPAuth = true;                     // Enable SMTP authentication 
        $mail->Username = 'test@cognitalsolutions.com';       // SMTP username 
        $mail->Password = 'AdminDev@987';         // SMTP password 
        $mail->SMTPSecure = 'ssl';                  // Enable TLS encryption, `ssl` also accepted 
        $mail->Port = 465;                          // TCP port to connect to 

        // Sender info 
        $mail->setFrom('test@cognitalsolutions.com', 'no-reply');
        $mail->addReplyTo('test@cognitalsolutions.com', 'no-reply');

        // Add a recipient 
        $mail->addAddress($toEmail);

        //$mail->addCC('cc@example.com'); 
        //$mail->addBCC('bcc@example.com'); 

        // Set email format to HTML 
        $mail->isHTML(true);

        // Mail subject 
        $mail->Subject = 'Reminder';

        // Mail body content 
        $mail->Body    = $mailContent;

        // Send email 
        if (!$mail->send()) {
            echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
            return 0;
        } else {
            echo 'Message has been sent.';
            return 1;
        }
    }
}
