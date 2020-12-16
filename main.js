let taskApp = new Vue({
  el: '#task_app',
  data: {
    tasks: [],
    task: '',
  },
  methods: {
    addTask: function(){
      if (this.task.length > 5) {
        this.tasks.unshift(this.task);
        console.log(this.tasks);
      }
    },
    removeTask: function(index){
      this.tasks.splice(index,1);
      console.log(this.tasks);
    },

  },

})
