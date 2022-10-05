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
export default {
  mounted() {
    //
  },
  methods: {
    handleFilesUpload(){
        this.files = this.$refs.files.files;
        console.log(this.files)
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
