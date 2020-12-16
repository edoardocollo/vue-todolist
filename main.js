let taskApp = new Vue({
  el: '#task_app',
  data: {
    tasks: [],
  },
  methods: {
    addTask: function(){
      const target = document.querySelector('#task_input');
      const taskToAdd = target.value;
      this.tasks.push(taskToAdd)
      console.log(this.tasks);
    },
  },
})
