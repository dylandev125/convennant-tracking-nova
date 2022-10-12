<?php

namespace Axistrustee\Bulkimport\Http\Controllers;

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
        
        for ($i = 0 ; $i < $request->length ; $i++) {
            $var = DB::table('compliances')
                ->insert([
                    'clcode' => json_decode($request->clcode)[$i],
                    'docName' => json_decode($request->docName)[$i],
                    'startDate'=> date("Y-m-d", strtotime(json_decode($request->startDate)[$i])),
                    'endDate' => date("Y-m-d", strtotime(json_decode($request->dueDate)[$i])),
                    'priority' => json_decode($request->priority)[$i],
                    'secured' => json_decode($request->secured)[$i],
                    'inconsistencyTreatment' => '',
                    'clientReference' => json_decode($request->clientReference)[$i],
                    'userId' => 1,
                    'mailCC' => json_decode($request->mailCC)[$i],
                ]);
        }

        echo json_encode($var);
        die;
    }
}
