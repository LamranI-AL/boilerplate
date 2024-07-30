"use client";
import React, { useEffect, useState } from "react";
import { PartyPopperIcon, CalendarDays, Cake } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Employer } from "@/interfaces/Interfaces";
import { GetEmployers } from "@/_services/GetEmployers";
import { formatDate } from "@/app/_utils/formatDate";
import Link from "next/link";

function NavCardDropdown() {
  const [todayBirthdayEmployyesListState, settodayBirthdayEmployyesListState] =
    useState<Employer[]>([]);
  const [monthBirthdayEmployyesListState, setMonthBirthdayEmployyesListState] =
    useState<Employer[]>([]);
  const [isDesplayMonthInfos, setIsDesplayMonthInfos] = useState(false);
  const today = new Date();
  const getDate = async () => {
    const employees: Employer[] = await GetEmployers();
    const todayBirthdayEmployyesList: Employer[] = employees.filter((empl) => {
      const birthday = new Date(empl.dateNaissance);
      return (
        birthday.getDate() === today.getDate() &&
        birthday.getMonth() === today.getMonth()
      );
    });
    const monthBirthdayEmployyesList: Employer[] = employees.filter((empl) => {
      const birthday = new Date(empl.dateNaissance);
      return birthday.getMonth() === today.getMonth();
    });
    setMonthBirthdayEmployyesListState(monthBirthdayEmployyesList);
    settodayBirthdayEmployyesListState(todayBirthdayEmployyesList);
    // console.log(today.getDate());
    // console.log(today.getMonth());
    if (today.getDate() === 1 || today.getDate() === 2) {
      // console.log("this time");
      setIsDesplayMonthInfos(true);
    } else {
      // console.log("not today");
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className="flex">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button className="flex" variant="ghost">
            <Cake />
            {todayBirthdayEmployyesListState ? (
              <div className="bg-red-800 rounded-full text-white text-xs px-2 py-1 ">
                {todayBirthdayEmployyesListState.length}
              </div>
            ) : null}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <h1 className="text-lg font-bold text-lime-900 text-center my-3  dark:text-gray-100">
            Les ouvriers qui ont un anniversaire aujourd'hui
          </h1>
          {todayBirthdayEmployyesListState ? (
            todayBirthdayEmployyesListState.map((emp, index) => (
              <Link
                key={index}
                href={`/dashboard/${emp._id}/view`}
                className="m-2"
              >
                <div key={index} className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="/momare.jpg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{emp.lastName}</h4>
                    <p className="text-sm">
                      {emp.FerstName} a son anniversaire aujourd'hui!
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        jour Anniversaire le {formatDate(emp.dateNaissance)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>
              <h1 className=" text-red-900 text-center my-3 dark:text-gray-100">
                Aucun ouvrier n'a un anniversaire aujourd'hui
              </h1>
            </div>
          )}
        </HoverCardContent>
      </HoverCard>
      {isDesplayMonthInfos ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button className="flex" variant="ghost">
              <PartyPopperIcon />
              {monthBirthdayEmployyesListState ? (
                <div className="bg-red-800 rounded-full text-white text-xs px-2 py-1 ">
                  {monthBirthdayEmployyesListState.length}
                </div>
              ) : null}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <h1 className="text-lg font-bold text-lime-900 text-center my-3  dark:text-gray-100">
              Les ouvriers qui ont un anniversaire ce mois
            </h1>
            {monthBirthdayEmployyesListState ? (
              monthBirthdayEmployyesListState.map((emp, index) => (
                <Link href={`/dashboard/${emp._id}/view`} className="m-2">
                  <div key={index} className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/momare.jpg" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{emp.lastName}</h4>
                      <p className="text-sm">
                        {emp.FerstName} a son anniversaire ce mois
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          jour Anniversaire le {formatDate(emp.dateNaissance)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>
                <h1 className=" text-red-900 text-center my-3 dark:text-gray-100">
                  Aucun ouvrier n'a un anniversaire aujourd'hui
                </h1>
              </div>
            )}
          </HoverCardContent>
        </HoverCard>
      ) : null}
    </div>
  );
}

export default NavCardDropdown;
