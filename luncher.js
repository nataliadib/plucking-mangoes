class LauncherObject {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:0
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA  = null
    }
    display(){
        if (this.launcher.bodyA){

        
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}


function keyPressed( ) {
	if (keyCode === 32){
	
	Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
	launcherObject=new LauncherObject(stoneObj.body,{x:235,y:420});
	}
}
