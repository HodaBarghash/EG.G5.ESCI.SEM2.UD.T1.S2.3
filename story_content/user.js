function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hSouuGhLCq":
        Script1();
        break;
      case "5ychYlq7OV5":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxhvDLQooU5HJVI_mIlcXYDcZy2zhJvEhdK_xzLt1R2g5gpb50SUJ1s0BiNIVZHTAaO/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbxhvDLQooU5HJVI_mIlcXYDcZy2zhJvEhdK_xzLt1R2g5gpb50SUJ1s0BiNIVZHTAaO/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

