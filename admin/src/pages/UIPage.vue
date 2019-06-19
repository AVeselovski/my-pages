<template>
  <div>
    <h1>UI Page</h1>
    <span v-if="processing">Submitting...</span>
    <form v-else v-on:submit="onSubmit">
      <label>Page name:</label>
      <input v-on:input="onNameInput" type="text">
      <br>
      <label>Page name (short):</label>
      <input v-on:input="onShortInput" type="text">
      <br>
      <label>Page path (short page name assigned by default):</label>
      <input v-on:input="onPathInput" type="text">
      <br>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// core
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UI',
  computed: { ...mapGetters(['processing']) },
  methods: {
    ...mapActions(['updateNameOfPage', 'updateNameOfPageShort', 'updatePath', 'createPage']),
    onNameInput: function(e) {
      this.updateNameOfPage(e.target.value);
    },
    onShortInput: function(e) {
      this.updateNameOfPageShort(e.target.value);
    },
    onPathInput: function(e) {
      this.updatePath(e.target.value);
    },
    onSubmit: function(e) {
      e.preventDefault();
      this.createPage(this.nameOfPage, this.nameOfPageShort, this.path);
    },
  },
};
</script>
