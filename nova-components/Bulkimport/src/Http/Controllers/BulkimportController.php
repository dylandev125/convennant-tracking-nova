<?php

namespace Axistrustee\Bulkimport\Http\Controllers;
use Axistrustee\Compliance\Models\Compliancetool;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Storage;
use Carbon\Carbon;
use Illuminate\Support\Str;
use PHPMailer\PHPMailer\PHPMailer;


//use Illuminate\Http\UploadedFile;

class BulkimportController extends Controller
{
    //
    public function insertData(Request $request)
    {
        $var = array();
        for ($i = 0 ; $i < $request->length ; $i++) {
            // $compliancetool = new Compliancetool([
            //     'clcode' => json_decode($request->clcode)[$i],
            //     'docName' => json_decode($request->docName)[$i],
            //     'startDate' => date("Y-m-d", strtotime(json_decode($request->startDate)[$i])),
            //     'endDate' => date("Y-m-d", strtotime(json_decode($request->dueDate)[$i])),
            //     'priority' => json_decode($request->priority)[$i],
            //     'secured' => json_decode($request->secured)[$i],
            //     'inconsistencyTreatment' => '',
            //     'clientReference' => json_decode($request->clientReference)[$i],
            //     'mailCC' => json_decode($request->mailCC)[$i],
            //     'userId' => 1,
            //     // 'organization_id' => $request->organization,
            // ]);
            // $complianceTool->save();

            // $id = DB::table('compliances')
            //     ->insertGetId([
            //         'clcode' => json_decode($request->clcode)[$i],
            //         'docName' => json_decode($request->docName)[$i],
            //         'startDate'=> date("Y-m-d", strtotime(json_decode($request->startDate)[$i])),
            //         'endDate' => date("Y-m-d", strtotime(json_decode($request->dueDate)[$i])),
            //         'priority' => json_decode($request->priority)[$i],
            //         'secured' => json_decode($request->secured)[$i],
            //         'inconsistencyTreatment' => '',
            //         'clientReference' => json_decode($request->clientReference)[$i],
            //         'userId' => 1,
            //         'mailCC' => json_decode($request->mailCC)[$i],
            //     ]);
            // $var[] = $id;
        }

        echo json_encode($var);
        die;
    }
}
