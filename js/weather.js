fetch('http://api.wunderground.com/api/4166ee973abae926/conditions/q/76021.json').then(function(response) {
  if (response.ok)
	{
	response.current_observation.temp_f = temp;
	};
})