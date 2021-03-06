let taskApp = new Vue({
  el: '#main_wrap',
  data: {
    tasks: [],
    completedTasks: [],
    trash: [],
    task: '',
    idCounter: 0,
    idCounterTrash: 0,
    idCounterCompleted: 0,
    ora: '',
    toDoShow: true,
    completedShow: true,
    trashShow: true,
    img: 'img/japan.png',
    japanShow: false,
    sunShow: false,
    backgroundShow: false,
  },
  methods: {
    addTask: function(){
      this.toDoShow = true;
      if (this.task.length > 5) {
        const taskId = this.idGenerator();
        const creationTime = this.ora;
        const taskBox = {
          id: taskId,
          value: this.task,
          time: creationTime,
          taskModifier: '',
          showModifier: false,
        };
        this.tasks.unshift(taskBox);
        this.task = '';
      }
    },
    removeTask: function(index){
      const creationTime = this.ora;
      const taskBox = {
        id: this.tasks[index].id,
        value: this.tasks[index].value,
        time: creationTime,
      };
      this.trash.unshift(taskBox);
      this.tasks.splice(index,1);
      console.log(this.tasks, this.trash);
    },
    moveToCompleted: function(index){
      const creationTime = this.ora;
      const taskBox = {
        id: this.tasks[index].id,
        value: this.tasks[index].value,
        time: creationTime,
      };
      this.completedTasks.unshift(taskBox);
      this.tasks.splice(index,1);
      console.log(this.tasks, this.trash);
    },
    moveFromTrashToCompleted: function(index){
      const creationTime = this.ora;
      const taskBox = {
        id: this.completedTasks[index].id,
        value: this.completedTasks[index].value,
        time: creationTime,
      };
      this.trash.unshift(taskBox);
      this.completedTasks.splice(index,1);
      console.log(this.tasks, this.trash);
    },

    deleteTask: function(index){
      this.trash.splice(index,1);
      console.log(this.trash);
    },

    idGenerator: function (){
      const id = `task${this.idCounter}`;
      this.idCounter++;
      return id;
    },
    modifyShow: function(index){
      this.tasks[index].showModifier = true;
    },
    modifyTask:function(index){
      this.tasks[index].value = this.tasks[index].taskModifier;
      this.tasks[index].taskModifier = '';
      this.tasks[index].showModifier = false;

    },
  },
  created(){
    const displayOra = document.querySelector('#display_ora');
    setTimeout(function () {
      taskApp.japanShow = true;
      taskApp.sunShow = true;
      taskApp.backgroundShow = true;
      const testArray =[
        {
          id:"task0",
          showModifier:false,
          taskModifier:"",
          time:"22:9:29",
          value:"fdgdfgdfgdfgdfg",
        },
        {
          id:"task0",
          showModifier:false,
          taskModifier:"",
          time:"22:9:29",
          value:"fdgdfgdfgdfgdfg",
        },
        {
          id:"task0",
          showModifier:false,
          taskModifier:"",
          time:"22:9:29",
          value:"fdgdfgdfgdfgdfg",
        },

      ];
      taskApp.tasks = testArray;
      taskApp.trash = testArray;
      taskApp.completedTasks = testArray;
    }, 10);
    setInterval(function () {
      const oraAttuale = new Date();
      const secondi = oraAttuale.getSeconds();
      const minuti = oraAttuale.getMinutes();
      const ore = oraAttuale.getHours();
      taskApp.ora = `${ore}:${minuti}:${secondi}`;

    }, 1000);
    setTimeout(function () {
      taskApp.tasks = [];
      taskApp.trash = [];
      taskApp.completedTasks = [];

    }, 5000);
  },

})
