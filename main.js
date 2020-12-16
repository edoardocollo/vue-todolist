let taskApp = new Vue({
  el: '#task_app',
  data: {
    tasks: [],
    task: '',
  },
  methods: {
    addTask: function(){
      this.tasks.push(this.task);
      console.log(this.tasks);
    },
  }
})
