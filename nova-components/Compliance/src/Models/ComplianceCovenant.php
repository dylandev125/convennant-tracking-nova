<?php

namespace Axistrustee\ComplianceOverview\Models;
use App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class ComplianceCovenant extends Model
{
	use HasFactory, LogsActivity;

	protected $table='compliances_covenants';

	protected $guarded = [];
    protected static $logOnlyDirty = true;

	protected $fillable = [
        'complianceId', 
        'type',
        'subType',
        'description',
        'associated_covenant_id',
        'isCustomCovenant',
        'comments',
        'frequency',
        'targetValue',
        'startDate',
        'applicableMonth',
        'dueDate',
        'maintained_as',
        'manner_of_creation',
        'account_number',
        'additional_details',
        'is_manner_invoked',
        'amount',
        'date_of_invocation',
        'amount_invoked',
        'period_for_renewal_before_expiry',
        'rating_symbol',
        'custom_parameter',
        'custom_value',
        'custom_child_dueDate',
        'custom_child'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['*']);
        // Chain fluent methods for configuration options
    }
}