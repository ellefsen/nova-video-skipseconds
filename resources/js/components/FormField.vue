<template>
  <default-field
    :field="field"
    :errors="errors">
    <template slot="field">
      <ul
        class="p-0 mb-4"
        v-if="chapters.length">
        <li
          class="flex mb-1 items-center justify-between"
          v-for="(chapter,index) in chapters"
          :key="index">
          <div class="w-1/3 mr-2">
            <input
              type="number"
              class="w-full form-control form-input form-input-bordered"
              placeholder="Sec"
              v-model.number="chapter.seek"
            >
          </div>
          <div class="mr-2 w-full">
            <input
              type="text"
              class="w-full form-control form-input form-input-bordered"
              placeholder="Title"
              v-model="chapter.title"
            >
          </div>
          <div>
            <button
              class="text-xs btn btn-default btn-primary inline-flex items-center relative"
              @click.prevent="remove(index)">
              Remove
            </button>
          </div>
        </li>
      </ul>

      <button
        @click.prevent="addChapter"
        class="btn btn-default btn-primary inline-flex items-center relative">
        Add chapter
      </button>
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova"

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ["resourceName", "resourceId", "field"],

  data () {
    return {
      chapters: []
    }
  },

  methods: {
    /*
      * Set the initial, internal value for the field.
      */
    setInitialValue() {
      this.chapters = this.field.value || []
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, JSON.stringify(this.value) || "")
    },

    /**
     * Update the field's internal value.
     */
    handleChange(value) {
      this.value = value
    },

    addChapter () {
      this.chapters.push({
        seek: 0,
        title: null
      })
    },

    remove (index) {
      this.chapters.splice(index, 1)
    }
  },

  watch: {
    chapters (value) {
      this.handleChange(value)
    }
  }
}
</script>
