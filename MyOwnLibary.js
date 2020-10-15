function touching(rect1,rect2){
  if(rect1.x-rect2.x <= (rect1.width+rect2.width)/2
  && rect2.x-rect1.x <= (rect1.width+rect2.width)/2
  && rect1.y-rect2.y <= (rect1.height+rect2.height)/2
  && rect2.y-rect1.y <= (rect1.height+rect2.height)/2){
    return true;
  }
  else{
    return false;
  }

}

function bounceOff(r1,r2){
    if(r1.x-r2.x <= (r1.width+r2.width)/2
    && r2.x-r1.x <= (r1.width+r2.width)/2){
      r1.velocityX=r1.velocityX*(-1);
      r2.velocityX=r2.velocityX*(-1);
    }
    
    if(r1.y-r2.y <= (r1.height+r2.height)/2
    && r2.y-r1.y <= (r1.height+r2.height)/2){
      r1.velocityY=r1.velocityY*(-1);
      r2.velocityY=r2.velocityY*(-1);
    }
  }
  
  