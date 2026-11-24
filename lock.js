(function(){
  const CODES = ["BIBLEBOOK2026"];
  const BUY_LINK = "https://payhip.com/b/t4QU2";
  const FREE = 3;

  function unlocked(){
    try { return localStorage.getItem("cw_unlocked") === "yes"; }
    catch(e){ return false; }
  }
  function ask(){
    const c = prompt("🔒 Unlock all the Bible Time stories!\n\nEnter your access code below.\nDon't have one yet? Tap Cancel to get full access.");
    if (c === null) { location.href = BUY_LINK; return false; }
    if (CODES.includes(c.trim().toUpperCase())) {
      try { localStorage.setItem("cw_unlocked","yes"); } catch(e){}
      alert("Unlocked! Enjoy all the stories 🎉");
      return true;
    }
    alert("That code didn't work. Please check it and try again.");
    return false;
  }
  function guard(fn){
    return function(i){
      if (i > FREE && !unlocked() && !ask()) {
        history.replaceState(null, "", "#tuis");
        return home();
      }
      return fn(i);
    };
  }
  lesson = guard(lesson);
  teacherPage = guard(teacherPage);
})();
