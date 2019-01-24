console.log("sakdjka");

window.onload = function () {
  const app = new Vue({
    el: '#app',
    data: {
      title: 'Bookmarks',
      sections: {
        "Admin": [
          {
            title: "ACE",
            desc: "Apply leave, submit claims.",
            url  : "https://portal.ace.gov.sg",
          },

          {
            title: "ACCESS",
            desc: "Performance review. Peer Bonus. Ugly Interface.",
            url  : "https://portal.ace.gov.sg",
          },
          {
            title: "EUSH",
            desc: "End User Self Help. Windows password reset.",
            url  : "https://portal.ace.gov.sg",
          },
          {
            title: "iLearn",
            desc: "Search and apply for courses.",
            url  : "https://portal.ace.gov.sg",
          },
        ],
        "Productivity": [
            {
              title: "One Drive",
              desc: "Shared Drive for files",
              url  : "https://portal.ace.gov.sg",
            },

            {
              title: "EtherDocs",
              desc: "Collaborative editing on documents",
              url  : "https://portal.ace.gov.sg",
            },
            {
              title: "Form.gov.sg",
              desc: "Create government forms and surveys in minutes.",
              url  : "https://portal.ace.gov.sg",
            },
            {
              title: "Isomer",
              desc: "Build a secure government website quickly.",
              url  : "https://portal.ace.gov.sg",
            },
          ],
      },
    },
    // methods: {
    //   createTodo(event) {
    //     const textbox = event.target;
    //     this.todos.push({ text: textbox.value, isDone: false });
    //     textbox.value = '';
    //   },
    //   startEditing(todo) {
    //     this.editing = todo;
    //   },
    // }
  });

}


var bookmarks1= {

    "ACE": {
      "desc" : "Apply leave, submit claims.",
      "url"  : "https://portal.ace.gov.sg",
      "category"  : "admin"
    },
    "iLearn": {
      "desc" : "Search and apply for courses.",
      "url"  : "https://portal.ace.gov.sg",
      "category"  : "admin"
    },
    "EUSH": {
      "desc" : "End User Self Help. Windows password reset.",
      "url"  : "https://portal.ace.gov.sg",
      "category"  : "admin"
    },
    "ACCESS": {
      "desc"      : "Performance review. Peer Bonus. Ugly Interface.",
      "url"       : "https://portal.ace.gov.sg",
      "category"  : "admin"
    },
    "One Drive": {
      "desc"      : "Shared Drive for files",
      "url"       : "https://portal.ace.gov.sg",
      "category"  : "productivity"
    },
    "EtherDocs": {
      "desc"      : "Collaborative editing on documents",
      "url"       : "https://portal.ace.gov.sg",
      "category"  : "productivity"
    },
    "Form.gov.sg": {
      "desc"       : "Create government forms and surveys in minutes.",
      "url"        : "https://portal.ace.gov.sg",
      "category"   : "productivity"
    },
    "EUSH": {
      "desc"       : "Build a secure government website quickly.",
      "Isomer"     : "https://portal.ace.gov.sg",
      "category"   : "productivity"
    },
};

var bookmarks= {
  "admin": {
      "ACE": {
        "desc" : "Apply leave, submit claims.",
        "url"  : "https://portal.ace.gov.sg",
      },
      "iLearn": {
        "desc" : "Search and apply for courses.",
        "url"  : "https://portal.ace.gov.sg",
      },
      "EUSH": {
        "desc" : "End User Self Help. Windows password reset.",
        "url"  : "https://portal.ace.gov.sg",
      },
      "ACCESS": {
        "desc" : "Performance review. Peer Bonus. Ugly Interface.",
        "url"  : "https://portal.ace.gov.sg",
      }
  },
  "productivity": {
      "One Drive": {
        "desc" : "Shared Drive for files",
        "url"  : "https://portal.ace.gov.sg",
      },
      "EtherDocs": {
        "desc" : "Collaborative editing on documents",
        "url"  : "https://portal.ace.gov.sg",
      },
      "Form.gov.sg": {
        "desc" : "Create government forms and surveys in minutes.",
        "url"  : "https://portal.ace.gov.sg",
      },
      "EUSH": {
        "desc" : "Build a secure government website quickly.",
        "Isomer.gov.sg"  : "https://portal.ace.gov.sg",
      }
  }
};
