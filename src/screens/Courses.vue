<template>
  <div>
  <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
    <v-container grid-list-md>
      <h1>Courses</h1>
      <v-layout wrap>
        <v-flex
          v-for="(course, index) in courses"
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
          :src="'data:image/jpeg;base64,' + course.image"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <div :style="{backgroundColor: 'white', 'border-radius': '10px', opacity: 0.7, textAlign: 'center'}">
                  <span class="headline" :style="{color: 'black'}">{{course.name}}</span>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-actions>
          <v-btn flat color="orange" :id="course.id"
              @click="goToDetails">Lessons</v-btn>
        </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getCourses } from '../config/api';

export default {
  name: 'Courses',
  data: () => ({
    courses: [], 
    loading: false
  }),
  created: function() {
    this.getCourses();
  },
  methods: {
    getCourses: async function() {
      this.loading = true;
      try {
        const courses = await getCourses(10);
        this.courses = courses.result.data[0];
      } catch (e) {
        // console.log('error:', e)
      } finally {
        this.loading = false;
      }
    },
    goToDetails: function(event) {
      const id = event.target.parentElement.id;
      this.$router.push({ path: `/lessons/${id}` })
    }
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
