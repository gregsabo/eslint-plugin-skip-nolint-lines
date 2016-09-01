function messageAllowed(message) {
  if (message.source.indexOf("nolint") > -1) {
    return false;
  }
  return true;
};

module.exports = {
  preprocess: function(input) {
    return [input];
  },

  postprocess: function(message2d, filename) {
    var out_messages = [];
    message2d.forEach(function(messageList) {
      messageList.forEach(function(message) {
        if (messageAllowed(message)) {
          out_messages.push(message);
        }
      });
    });
    return out_messages;
  }
};
