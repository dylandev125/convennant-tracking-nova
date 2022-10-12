<template>
  <div>
    <Head title="Bulkimport" />

    <Heading class="mb-6">Bulk Import</Heading>

    <Card
      class="flex flex-col items-center justify-center"
      style="min-height: 300px"
    >
    
      <div class="field-wrapper flex flex-col border-b border-gray-100 dark:border-gray-700 md:flex-row" index="0">
        <div class="px-6 md:px-8 mt-2 md:mt-0 w-full md:py-5">
          <label for="" class="inline-block pt-2 leading-tight">Upload Document(s) <span class="text-red-500 text-sm">*</span>
          </label>
        </div>
        <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 w-full md:py-5">
          <input type="file" multiple class="w-full form-control form-input form-input-bordered" id="name-create-documentUpload-text-field" name="documentUpload[]" dusk="documentUpload" list="name-list" required="required" ref="files" @change="handleFilesUpload">
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  mounted() {
    
    //
  },
  methods: {
    handleFilesUpload(e) {
      let files = e.target.files || e.dataTransfer.files;
      Papa.parse(files[0], {
        header: true,
        complete: this.onComplete,
        // error: undefined,
        skipEmptyLines: true,
        delimitersToGuess: [
          ",",
          "\t",
          "|",
          ";",
          Papa.RECORD_SEP,
          Papa.UNIT_SEP,
        ],
      });
    },

    onComplete(results, file) {
      console.log(results.data);

      var data_fields = ['clcode', 'isin', 'clientReference', 'secured', 'frequency', 'startDate', 'dueDate', 'type', 'subType', 'comments', 'targetValue', 'priority', 'mailCC', 'user', 'organization', 'docName', 'description', 'isCustomCovenant'];
      var mandatory_fields = ['clcode', 'clientReference', 'secured', 'frequency', 'startDate', 'dueDate', 'type', 'subType', 'targetValue', 'user', 'organization', 'docName', 'isCustomCovenant'];

      const formDataObj = Object.fromEntries(results.data.entries());
      let form_data = new FormData();
      
      let result = {}

      for (let row of results.data) {
        for(let key2 of mandatory_fields) {
          if ( row[key2] === '' ) {
            return;
          }
        }
        
        for (let key of data_fields) {
          if(!Array.isArray(result[key])) {
            result[key] = []
          }
          result[key].push(row[key])
        }
      }

      for (let field of data_fields) {
        form_data.append(field, JSON.stringify(result[field]))
      }

      form_data.append('length', results.data.length)

      Nova.request()
        .post('/nova-vendor/bulkimport/insertdata', form_data)
        .then((res) => {
          console.log(res.data)
        });
    },    
  },
  data() {
    return {
      'files': ''
    }
  }
}
</script>

<style>
/* Scoped Styles */
</style>
