const App = {
  data() {
    return {
      placeholderSrting: 'what you want to do',
      title: 'to do list',
      inputValue: '',
      notes: [], 
    }
  },
  
    methods:{
      inputChangeHandler (event) {
        this.inputValue = event.target.value
      },
      addNewNote() {
        if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
        }
      },
      deleteNote(idx){
        this.notes.splice(idx,1)
        

      }
      
    }
  
}
Vue.createApp(App).mount('#app')