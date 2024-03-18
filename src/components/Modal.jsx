import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-blue-500 uppercase text-white hover:bg-blue-400 hover:scale-110 text-xs lg:text-md"
        >
         Пишете ни ☎️
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-xl md:text-3xl font-semibold">
              <span className="text-2xl md:text-5xl text-blue-600 font-bold">
                CL
              </span>
              eaner 🧹
            </h1>
          </DialogTitle>
          <DialogDescription>
            Let's Connect: Your Next Step to Success - Write an email or call
            now
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              defaultValue="john@gmail.com"
              className="col-span-3"
            />
          </div>
          <Textarea placeholder="Enter your text here " />
        </div>
        <DialogFooter className="flex justify-center items-center">
          <Button className="rounded-lg w-full" type="submit">
           Изпрати
          </Button>
        </DialogFooter>
        <div className="flex justify-between">
          <h1>☎️ - 088811111</h1>
          <h1>📩 - CLeaning@gmail.com</h1>
        </div>
      </DialogContent>
    </Dialog>
  );
}
