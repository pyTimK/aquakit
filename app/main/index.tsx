import Avatar from "@/components/svg/Avatar";
import FullLogo from "@/components/svg/FullLogo";
import { User, signOut } from "firebase/auth";
import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Fishes } from "../constants";
import useFishData from "@/hooks/useFishData";
import {
  Data,
  Fish,
  FishData,
  constructEmptyData,
  constructEmptyFishData,
} from "@/classes/Fish";
import PHBox from "@/components/svg/PHBox";
import TempBox from "@/components/svg/TempBox";
import useData from "@/hooks/useData";
import { interFont } from "@/styles/fonts";
import MainLowerBg from "@/components/svg/MainLowerBg";
import MyInput from "@/components/MyInput";
import MyDialog from "@/components/MyDialog";
import useDeviceDimensions from "@/hooks/useDeviceDimensions";
import MyButton from "@/components/MyButton";
import { auth } from "../firebase";

interface MainPageProps {
  user: User;
}

type openDialogType = {
  title: string;
  initialValue: string;
  units: string;
  onSave: (val: number) => void;
};

const MainPageContext = createContext({
  user: {} as User,
  fish: Fishes.guppy,
  setFish: null as Dispatch<SetStateAction<Fish>> | null,
  data: constructEmptyData(),
  updateData: async (new_fields: Partial<Data>) => {},
  fishData: constructEmptyFishData(),
  updateFishData: async (new_fields: Partial<FishData>) => {},
  openFishDropdown: false,
  setOpenFishDropdown: null as Dispatch<SetStateAction<boolean>> | null,
  openAvatarDropdown: false,
  setOpenAvatarDropdown: null as Dispatch<SetStateAction<boolean>> | null,
  openDialog: ({ title, initialValue, units, onSave }: openDialogType) => {},
  screenWidth: 0,
});

const MainPage: React.FC<MainPageProps> = ({ user }) => {
  const [fish, setFish] = useState(Fishes.guppy);
  const { data, updateData } = useData();
  const { fishData, updateFishData } = useFishData({ fish });
  const [openFishDropdown, setOpenFishDropdown] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { screenWidth } = useDeviceDimensions();
  const [title, setTitle] = useState("Title");
  const [initialValue, setInitialValue] = useState("25");
  const [units, setUnits] = useState("sec");
  const onSaveCallbackRef = useRef<(val: number) => void>((val) => {});
  const lowerDataRef = useRef<HTMLDivElement>(null);
  // const bottomDivRef = useRef<HTMLDivElement>(null);
  const [lowerDataHeight, setLowerDataHeight] = useState(0);
  // const [openDropdown, setOpenDropdown] = useState(false);
  // const elementToDropdown = useRef<HTMLDivElement>(null);

  // function openDropdown({}){}

  function openDialog({ title, initialValue, units, onSave }: openDialogType) {
    setShowDialog(true);
    setTitle(title);
    setInitialValue(initialValue);
    setUnits(units);
    onSaveCallbackRef.current = onSave;
  }

  // const handleScroll = () => {
  //   console.log(
  //     `scrollY: ${window.scrollY}\tclient: ${bottomDivRef.current?.clientTop}\toffset: ${bottomDivRef.current?.offsetTop}\tscroll: ${bottomDivRef.current?.scrollTop}`
  //   );

  //   if (bottomDivRef.current) {
  //     bottomDivRef.current.style.top = `calc(18rem - ${window.scrollY})!`;
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const height = lowerDataRef.current?.clientHeight ?? 0;

    if (height != 0) {
      setLowerDataHeight(height + 50);
    }
  }, [lowerDataRef.current?.clientHeight]);

  function closeDialog() {
    setShowDialog(false);
  }

  return (
    <MainPageContext.Provider
      value={{
        user,
        fish,
        setFish,
        data,
        updateData,
        fishData,
        updateFishData,
        openFishDropdown,
        setOpenFishDropdown,
        openAvatarDropdown,
        setOpenAvatarDropdown,
        openDialog,
        screenWidth,
      }}
    >
      <div className="fixed px-5 pt-5 bg-light_blue min-h-screen w-full">
        <Header />
        <Boxes />
      </div>
      <div
        className="absolute top-72 pt-16 left-0 right-0 overflow-x-clip"
        // ref={bottomDivRef}
      >
        <div className=" absolute z-10 -left-5 -right-5 ">
          <MainLowerBg height={lowerDataHeight} />
        </div>
        <div className="absolute top-36 z-20 px-8 w-full" ref={lowerDataRef}>
          <LowerData />
        </div>
      </div>
      <MyDialog
        showDialog={showDialog}
        closeDialog={closeDialog}
        initialValue={initialValue}
        title={title}
        units={units}
        onSaveCallbackRef={onSaveCallbackRef}
      />
      {/* <MyDropdown
        open={openDropdown}
        setOpen={setOpenDropdown}
        elementToDropdown={elementToDropdown}
      >
        
      </MyDropdown> */}
    </MainPageContext.Provider>
  );
};

// interface MyDropdownProps {
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   elementToDropdown: RefObject<HTMLDivElement>;
//   children: ReactNode;
// }

// const MyDropdown: React.FC<MyDropdownProps> = ({
//   open,
//   setOpen,
//   elementToDropdown,
//   children,
// }) => {
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (elementToDropdown.current && dropdownRef.current) {
//       const elementDOMRect = elementToDropdown.current.getBoundingClientRect();
//       const dropdownStyle = dropdownRef.current.style;

//       dropdownStyle.top = `${elementDOMRect.y + elementDOMRect.height + 10}`;

//       dropdownStyle.left = `${elementDOMRect.x}`;
//     }
//   }, [elementToDropdown.current]);
//   return (
//     <div>
//       <div className="relative">
//         {open && (
//           <div
//             ref={dropdownRef}
//             className="absolute bg-white rounded flex flex-col p-2 z-50"
//           >
//             {children}
//           </div>
//         )}
//       </div>
//       {open && (
//         <div
//           className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-red"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

interface BoxDataProps {
  title: string;
  subtitle?: string;
  boldSubtitle?: boolean;
  value?: number;
  units?: string;
  onSave: (val: number) => void;
  onlyTopRounded?: boolean;
}

const BoxData: React.FC<BoxDataProps> = ({
  title,
  subtitle,
  value,
  onSave,
  units,
  boldSubtitle = false,
  onlyTopRounded = false,
}) => {
  const { openDialog } = useContext(MainPageContext);

  return (
    <div
      className={`${
        onlyTopRounded ? "rounded-t-2xl" : "rounded-2xl"
      } border bg-light_blue p-5 flex items-center justify-between w-full`}
    >
      <div className="flex flex-col">
        <p className={`${interFont} text-2xl font-semibold`}>{title}</p>
        <p
          className={`${interFont} text-xl ${
            boldSubtitle ? "font-semibold" : "font-light"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <div
        className={`${interFont} text-3xl bg-darker_blue rounded-md flex justify-center items-center px-2 py-1 cursor-pointer min-w-fit`}
        onClick={() =>
          openDialog({
            title: `${title}`,
            initialValue: `${value}`,
            onSave,
            units: `${units}`,
          })
        }
      >
        <p className={`${interFont} text-2xl text-white font-light`}>
          {value} {units}
        </p>
      </div>
    </div>
  );
};

const TargetTempData = () => {
  const { fishData, updateFishData } = useContext(MainPageContext);

  function handleTempChange(newTemp: number) {
    updateFishData({ target_temp: newTemp });
  }

  return (
    <BoxData
      title="Target Temperature"
      units="°C"
      boldSubtitle
      value={fishData.target_temp}
      onSave={handleTempChange}
    />
  );
};

const DrainData = () => {
  const { fishData, updateFishData, openDialog } = useContext(MainPageContext);
  console.log(fishData);

  function handleDrainDurationChange(drain_duration: number) {
    updateFishData({ drain_duration });
  }

  const handleAddTime: MouseEventHandler<HTMLDivElement> = (e) => {
    openDialog({
      title: "Add Drain Time",
      initialValue: "",
      onSave: (newVal) => {},
      units: "",
    });
  };

  return (
    <div className="border border-darker_blue rounded-2xl">
      <BoxData
        title="Drain"
        subtitle="Settings"
        units="s"
        value={fishData.drain_duration}
        onSave={handleDrainDurationChange}
        onlyTopRounded
      />
      <div className="flex justify-start items-center space-x-5 py-3 px-5 border-darker_blue border-t">
        {fishData.drain_schedules &&
          fishData.drain_schedules.map((sched) => {
            const { time, meridiem } = convertTo12HourFormat(sched);
            return (
              <div
                key={sched}
                className="border border-darker_blue rounded-full bg-light_blue w-16 h-16 flex flex-col justify-center items-center"
              >
                <p>{time}</p>
                <p className="text-xs">{meridiem}</p>
              </div>
            );
          })}
        <div
          onClick={handleAddTime}
          className="border border-dashed border-darker_blue rounded-full bg-light_blue w-16 h-16 flex flex-col justify-center items-center"
        >
          <p className={`${interFont} text-4xl font-extralight`}>+</p>
        </div>
      </div>
    </div>
  );
};

function convertTo12HourFormat(timeString: string) {
  // Split the input time string into hours and minutes
  const [hoursStr, minutesStr] = timeString.split(":");
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  // Determine whether it's AM or PM
  const meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format without "0" in the front
  const formattedHours = hours % 12 || 12;

  // Format the time in the desired 12-hour format
  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return { time: formattedTime, meridiem };
}

const FeedData = () => {
  const { fishData, updateFishData } = useContext(MainPageContext);

  function handleFeedDurationChange(feeding_duration: number) {
    updateFishData({ feeding_duration });
  }

  return (
    <BoxData
      title="Feed"
      subtitle="Settings"
      units="s"
      value={fishData.feeding_duration}
      onSave={handleFeedDurationChange}
    />
  );
};

const LowerData = () => {
  return (
    <div className="w-full space-y-10">
      <TargetTempData />
      <DrainData />
      <FeedData />
    </div>
  );
};

interface BoxWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute top-12 left-5 flex flex-col space-y-1">
        <p className={`${interFont} text-3xl`}>{title}</p>
        <p className={`${interFont} text-base`}>{subtitle}</p>
      </div>
    </div>
  );
};

const Boxes = () => {
  const { data } = useContext(MainPageContext);
  return (
    <div className="flex justify-around mt-12">
      <BoxWrapper title={`${data.ph}`} subtitle="pH">
        <PHBox />
      </BoxWrapper>
      <BoxWrapper title={`${data.temp}°C`} subtitle="Temp">
        <TempBox />
      </BoxWrapper>
    </div>
  );
};

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex">
      <div className="w-12">
        <AvatarDropdown />
      </div>
      <div className="flex-grow px-4 flex justify-center">
        <div className="w-full max-w-xs">
          <FullLogo />
        </div>
      </div>
      <div className="w-12">
        <FishDropdown />
      </div>
    </div>
  );
};

const AvatarDropdown = () => {
  const { user, openAvatarDropdown, setOpenAvatarDropdown, setFish } =
    useContext(MainPageContext);

  function toggleOpenAvatarDropdown() {
    if (!setOpenAvatarDropdown) return;
    setOpenAvatarDropdown((value) => !value);
  }

  return (
    <div>
      <div className="relative">
        <div
          className="flex flex-col cursor-pointer"
          onClick={toggleOpenAvatarDropdown}
        >
          <Avatar />
        </div>
        {openAvatarDropdown && (
          <div className="absolute left-0 translate-y-1 bg-white rounded flex flex-col p-2 z-20 justify-start items-start">
            <p className="mb-3">{user.email}</p>
            <MyButton
              label="SIGN OUT"
              color="bg-red"
              noMargin
              onClick={() => {
                signOut(auth);
              }}
            />
          </div>
        )}
      </div>
      {openAvatarDropdown && (
        <div
          className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-semi_transparent"
          onClick={toggleOpenAvatarDropdown}
        />
      )}
    </div>
  );
};

interface FishDropdownProps {}

const FishDropdown: React.FC<FishDropdownProps> = () => {
  const { fish, openFishDropdown, setOpenFishDropdown, setFish } =
    useContext(MainPageContext);

  function toggleOpenFishDropdown() {
    if (!setOpenFishDropdown) return;
    setOpenFishDropdown((value) => !value);
  }

  return (
    <div>
      <div className="relative">
        <div
          className="flex flex-col cursor-pointer"
          onClick={toggleOpenFishDropdown}
        >
          {fish.image}
          <p className="-translate-y-2">{fish.name}</p>
        </div>
        {openFishDropdown && (
          <div className="absolute right-0 bg-white rounded flex flex-col p-2 z-20">
            {Object.keys(Fishes).map((fish_key) => {
              const fish = Fishes[fish_key];
              return (
                <div
                  key={fish.name}
                  className="flex flex-row items-center cursor-pointer"
                  onClick={() => {
                    if (!setFish) return;
                    setFish(fish);
                    toggleOpenFishDropdown();
                  }}
                >
                  <div className="w-10 mr-3">{fish.image}</div>
                  <p className="whitespace-nowrap">{fish.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {openFishDropdown && (
        <div
          className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-semi_transparent"
          onClick={toggleOpenFishDropdown}
        />
      )}
    </div>
  );
};

export default MainPage;
