let log = {
  info: function(info) {
    console.log(`Info is ${info}`);
  },
  warning: warning => {
    console.log(`Warning is ${warning}`);
  },
  error: error => {
    console.log(`Error is ${error}`);
  }
};

module.exports = log;
