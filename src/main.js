import 'bulma/css/bulma.min.css'

import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt, faFileDownload, faPlusSquare, faAngleDown, faUpload
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { Button, ErrorDisplay, Hero, Icon, Image, Label,
  Tag, Text, Dropdown, FileInput, IconButton,
  NumberInput, Select, Table, TextInput } from './components/'

import router from './routing'
import { VuelidatePlugin } from '@vuelidate/core'

library.add(faTrashAlt, faFileDownload, faPlusSquare, faAngleDown, faUpload)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('p-button', Button);
app.component('p-error-display', ErrorDisplay);
app.component('p-hero', Hero);
app.component('p-icon', Icon);
app.component('p-image', Image);
app.component('p-label', Label);
app.component('p-tag', Tag);
app.component('p-text', Text);

app.component('p-dropdown', Dropdown);
app.component('p-file-input', FileInput);
app.component('p-icon-button', IconButton);
app.component('p-number-input', NumberInput);
app.component('p-select', Select);
app.component('p-table', Table);
app.component('p-text-input', TextInput);

axios.defaults.baseURL = 'http://localhost:6003/api/'

app.use(VueAxios, axios)
app.use(VuelidatePlugin)
app.use(router);

app.mount('#app')
