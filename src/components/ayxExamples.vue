<template>

  <div>

<v-dialog v-model="viewInput" max-width="350px">
  <v-card>
      <v-data-table
          v-bind:headers="headers"
          :items="items"
          hide-actions
          dense
          small
          class="elevation-0"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.field1 }}</td>
          <td>{{ props.item.field2 }}</td>
          <td class="text-xs-right">{{ props.item.field3 }}</td>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="viewInput=false">Close</v-btn>
      </v-card-actions>
  <v-card>
</v-dialog>

<!-- weird but was having issues with code alignment -->

<!-- Single Array -->
<v-card-text v-if="mode == 'array'" class="mt-2 px-0 py-0">
<p class="grey--text"><i>A single array of objects containing each input record's <span class="grey--text text--darken-3"><b>name : value</b></span> pairs</i></p>
<code style="width: 100%;" class="grey darken-4 elevation-2 py-1 pl-1">
<span class="grey--text"><i>record 1 (and only)</i></span><br>
<span class="white--text">[</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;{</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_1"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">foo</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_2"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">abc</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_3"</span><span class="light-blue--text text--lighten-4">: </span><span class="orange--text text--darken-1">123</span><span class="light-blue--text text--lighten-4">,</span><span class="grey--text">&nbsp;&nbsp;&nbsp;&nbsp;row 1 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;},</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;{</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_1"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">bar</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_2"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">xyz</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_3"</span><span class="light-blue--text text--lighten-4">: </span><span class="orange--text text--darken-1">456</span><span class="light-blue--text text--lighten-4">,</span><span class="grey--text">&nbsp;&nbsp;&nbsp;&nbsp;row 2 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;},</span><br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;...</span><br>
<span class="white--text">]</span>
</code>
</v-card-text>
<!-- -->

<!-- Single Object -->
<v-card-text v-else-if="mode == 'object'" class="mt-2 px-0 py-0">
<p class="grey--text"><i>A single object with arrays containing the values for each input field</i></p>
<code style="width: 100%;" class="grey darken-4 elevation-2 py-1 pl-1">
<span class="grey--text"><i>record 1 (and only)</i></span><br>
<span class="light-blue--text text--lighten-4">{</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;"field_1"</span><span class="light-blue--text text--lighten-4">:</span><span class="white--text">&nbsp;[</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;&nbsp;&nbsp;"</span><span class="light-green--text text--lighten-1">foo</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;&nbsp;&nbsp;"</span><span class="light-green--text text--lighten-1">bar</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="white--text">&nbsp;&nbsp;]</span><span class="light-blue--text text--lighten-4">,</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;"field_2"</span><span class="light-blue--text text--lighten-4">:</span><span class="white--text">&nbsp;[</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;&nbsp;&nbsp;"</span><span class="light-green--text text--lighten-1">abc</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;&nbsp;&nbsp;"</span><span class="light-green--text text--lighten-1">xyz</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="white--text">&nbsp;&nbsp;]</span><span class="light-blue--text text--lighten-4">,</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;"field_3"</span><span class="light-blue--text text--lighten-4">:</span><span class="white--text">&nbsp;[</span><br>
<span class="orange--text text--darken-1">&nbsp;&nbsp;&nbsp;&nbsp;123</span><span class="light-blue--text text--lighten-4">,</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="orange--text text--darken-1">&nbsp;&nbsp;&nbsp;&nbsp;456</span><span class="light-blue--text text--lighten-4">,</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="white--text">&nbsp;&nbsp;]</span><span class="light-blue--text text--lighten-4">,</span><br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;...</span><br>
<span class="light-blue--text text--lighten-4">}</span>
</code>
</v-card-text>
<!-- -->

<v-card-text v-else class="mt-2 px-0 py-0">
<p class="grey--text"><i>Each input record becomes an object with <span class="grey--text text--darken-3"><b>name : value</b></span> pairs</i></p>
<code style="width: 100%;" class="grey darken-4 elevation-2 py-1 pl-1">
<span class="grey--text"><i>record 1</i></span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;{</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_1"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">foo</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_2"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">abc</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 1 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_3"</span><span class="light-blue--text text--lighten-4">: </span><span class="orange--text text--darken-1">123</span><span class="light-blue--text text--lighten-4">,</span><span class="grey--text">&nbsp;&nbsp;&nbsp;&nbsp;row 1 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;}</span><br>
<hr>
<span class="grey--text"><i>record 2</i></span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;{</span><br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_1"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">bar</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_2"</span><span class="light-blue--text text--lighten-4">: "</span><span class="light-green--text text--lighten-1">xyz</span><span class="light-blue--text text--lighten-4">",</span><span class="grey--text">&nbsp;&nbsp;row 2 value<br>
<span class="deep-purple--text text--lighten-3">&nbsp;&nbsp;&nbsp;&nbsp;"field_3"</span><span class="light-blue--text text--lighten-4">: </span><span class="orange--text text--darken-1">456</span><span class="light-blue--text text--lighten-4">,</span><span class="grey--text">&nbsp;&nbsp;&nbsp;&nbsp;row 2 value<br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;&nbsp;&nbsp;...</span><br>
<span class="light-blue--text text--lighten-4">&nbsp;&nbsp;}</span><br>
<hr>
<span class="grey--text"><i>etc</i></span><br>
<span class="grey--text text--lighten-1">&nbsp;&nbsp;...</span><br>
</code>
</v-card-text>

<v-btn color="normal" class="" small flat @click="viewInput=true">
  <span>view example input</span>
  <v-icon right small>visibility</v-icon>
</v-btn>

</div>
</template>

<script>

export default {
    name: 'ayxMode',
    props: ['mode'],
    data () {
      return {
        viewInput: false,
        headers: [
          {
            text: 'field_1',
            align: 'left',
            sortable: false,
            value: 'field1'
          },
          {
            text: 'field_2',
            align: 'left',
            sortable: false,
            value: 'field2'
          },
          {
            text: 'field_3',
            align: 'right',
            sortable: false,
            value: 'field3'
          },
        ],
        items: [
          {
            field1: 'foo',
            field2: 'abc',
            field3: 123,
          },
          {
            field1: 'bar',
            field2: 'xyz',
            field3: 456,
          }
        ]
      }
    }
  }
</script>