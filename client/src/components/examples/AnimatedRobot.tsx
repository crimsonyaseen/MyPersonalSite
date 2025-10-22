import AnimatedRobot from "../AnimatedRobot";

export default function AnimatedRobotExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background relative overflow-hidden">
      <div className="text-center text-muted-foreground">
        <p>Watch the robot glide across the screen!</p>
        <p className="text-sm mt-2">(Animation plays once on load)</p>
      </div>
      <AnimatedRobot />
    </div>
  );
}
