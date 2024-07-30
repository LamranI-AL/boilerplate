import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DrawerContentSlice from "./DrawerContentSlice";
import { MessageCircleCode } from "lucide-react";
import { Session } from "@/interfaces/Interfaces";

interface Props {
  session: Session;
}

export function DrawerDemo({ session }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-amber-950">
          <MessageCircleCode />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Section de chat</DrawerTitle>
            <DrawerDescription>
              Échanger avec les autres administrateurs à travers cette session
            </DrawerDescription>
          </DrawerHeader>
          <DrawerContentSlice session={session} />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
