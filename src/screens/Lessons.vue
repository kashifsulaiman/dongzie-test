<template>
  <div>
    <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
    <v-container grid-list-md>
      <h1>Lessons</h1>
      <v-layout wrap>
        <v-flex
          v-for="(lesson, index) in lessons"
          :key="index"
          xs12
          md4
        >
          <v-item>
            <v-card
              dark
            >
              <v-img
          class="white--text"
          height="200px"
          :src="'data:image/jpeg;base64,' + lesson.image"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <div :style="{backgroundColor: 'white', 'border-radius': '10px', opacity: 0.7, textAlign: 'center'}">
                  <span class="headline" :style="{color: 'black'}">{{lesson.name}}</span>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-actions>
          <span v-html="lesson.body"></span>
        </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getLessons } from '../config/api';

export default {
  name: 'Lessons',
  data: () => ({
    lessons:  [], 
    loading: false
  }),
  created: function() {
    this.getLessons(this.$route.params.id);
  },
  methods: {
    getLessons: async function(id) {
      this.loading = true;
      try {
        const lessons = await getLessons(id);
        console.log('lessons =>', lessons);
        this.lessons = lessons.result.data[0];
      } catch (e) {
        // console.log('error:', e)
      } finally {
        this.loading = false;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
