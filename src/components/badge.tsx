import TryForFree from "./try.for.free";

export default function Badge() {
  return (
    <div className="flex w-full items-center bg-secondary-foreground justify-center gap-x-5 py-1">
      <p className="text-sm text-primary-foreground">Introducing Senseii: A Smarter Approach to Personal Health and LifeStyle Management</p>
      <div className="text-primary-foreground">
        {" | "}
      </div>
      <TryForFree />
    </div>
  )
}
