function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance)*264
}

function distanceTravelledInFeet(start, destination){
  return (Math.abs(destination-start) * 264)
}

function calculatesFarePrice(start, destination){
  let cost = 0;
  if(distanceTravelledInFeet(start, destination) < 400)
  {
    return cost
  }
  else if(distanceTravelledInFeet(start, destination) < 2000)
  {
    return ((distanceTravelledInFeet(start, destination) - 400) * .02)
  }
  else if(distanceTravelledInFeet(start, destination)< 2500)
  {
    return 25
  }
  else 
  {
    return 'cannot travel that far'
  }
}