<template>
  <div id="app">
    <vue-csv-import
      v-slot="{ file }"
      v-model="csv"
      :fields="{
        name: { required: True, label: 'Name' },
        phone: { required: true, label: 'Phone' },
      }"
      :text="{
        toggleHeaders: 'Arquivo tem cabeçalho',
        submitBtn: 'Enviar',
      }"
    >
      <div class="flex flex-col items-center">
        <vue-csv-errors></vue-csv-errors>
        <vue-csv-toggle-headers></vue-csv-toggle-headers>
        <vue-csv-input></vue-csv-input>
      </div>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <vue-csv-table-map
                :auto-match="false"
                :table-attributes="{ id: 'csv-table' }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="py-3">
        <vue-csv-submit @submit="submit($event, payload)" />
      </div>
    </vue-csv-import>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

function hljsDefineVue(hljs) {
  return {
    subLanguage: "xml",
    contains: [
      hljs.COMMENT("<!--", "-->", {
        relevance: 10,
      }),
      {
        begin: /^(\s*)(<script>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<script lang=["']ts["']>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "typescript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style(\sscoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "css",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style lang=["'](scss|sass)["'](\sscoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "scss",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style lang=["']stylus["'](\sscoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "stylus",
        excludeBegin: true,
        excludeEnd: true,
      },
    ],
  };
}

hljsDefineVue(hljs);

export default {
  name: "App",
  data() {
    return {
      csv: null,
    };
  },
  mounted() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  },

  methods: {
    submit(data) {
      console.log("data", data);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  text-align: left;
}

code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
}

#app .form {
  text-align: left;
}
</style>
