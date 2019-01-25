console.log("sakdjka");

window.onload = function () {
  const app = new Vue({
    el: '#app',
    data: {
      title: 'Bookmarks',
      sections: {
        "Admin": [
          {
            title: "HR Portal aka ACE",
            desc: "Apply leave, submit claims.",
            url  : "https://portal.ace.gov.sg",
          },

          {
            title: "Personal Development",
            desc: "Performance review. Peer Bonus. Security Clearance. Ugly Interface.",
            url  : "https://portal.ace.gov.sg",
          },
          {
            title: "EUSH",
            desc: "End User Self Help. Windows password reset.",
            url  : "https://portal.ace.gov.sg",
          },
          {
            title: "Personal Development Portal aka iLearn",
            desc: "Search and apply for courses.",
            url  : "https://portal.ace.gov.sg",
          },
          {
            title: "iPRS",
            desc: "Purchase Order Request Stuff",
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
            {
              title: "Vault",
              desc: "Build a secure government website quickly.",
              url  : "https://portal.ace.gov.sg",
            },
          ],
      },
    },
    methods: {
      createBookmark() {
        var modal = document.getElementById('myModal');

        console.log("asdas");
        modal.style.display = "block";
      },
      closeModal() {
        var modal = document.getElementById('myModal');

        console.log("wewr");
        modal.style.display = "none";
      },
      addObject() {
        console.log("dsfdsf");
      }
    }
  });

}
