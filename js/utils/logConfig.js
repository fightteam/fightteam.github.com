define(['utils/log'], function(Logger) {
  Logger.define = {
    'faith-log': {
      level: "all",
      dateFormat: "yyyy-MM-dd hh:mm:ss",
      tpl: "{TIMESTAMP},{LOGGERLEVEL}[{LOGGERNAME}]:"
    }
  };
  return Logger.get("faith-log");
});
