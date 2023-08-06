import FullLogo from "@/components/svg/FullLogo";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import { interFont } from "@/styles/fonts";
import SizedBox from "@/components/SizedBox";
import BottomStats from "@/components/svg/BottomStats";
import CircleBackground from "@/components/svg/CircleBackground";
import useDeviceDimensions from "@/hooks/useDeviceDimensions";
import {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  useRef,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import notify from "@/myfunctions/notify";
import isValidEmail from "@/myfunctions/is_valid_email";

enum SignInType {
  signIn,
  logIn,
}

const SignInPage: React.FC = () => {
  const [type, setType] = useState(SignInType.signIn);
  const { aspectRatio } = useDeviceDimensions();
  return (
    <div className="relative min-h-screen min-w-screen bg-white overflow-hidden">
      <div className="absolute m-auto left-0 right-0 z-10">
        <Content type={type} setType={setType} />
      </div>
      <div
        className={`absolute ${
          aspectRatio > 0.98 ? "-bottom-96" : "bottom-0"
        } left-0 right-0`}
      >
        <BottomStats />
      </div>
      <div className={`absolute top-0 right-0 w-4/5 z-0 max-w-sm`}>
        <CircleBackground />
      </div>
    </div>
  );
};

interface ContentProps {
  type: SignInType;
  setType: Dispatch<SetStateAction<SignInType>>;
}

const Content: React.FC<ContentProps> = ({ type, setType }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorEmailInput, setErrorEmailInput] = useState(false);
  const [errorPasswordInput, setErrorPasswordInput] = useState(false);

  function toggleType() {
    setType(type === SignInType.signIn ? SignInType.logIn : SignInType.signIn);
  }

  const verifyEmail = (email: string | undefined) => {
    if (!email) {
      notify("Please Enter your Email");
      setErrorEmailInput(true);
      return false;
    }

    if (!isValidEmail(email)) {
      notify("Invalid Email");
      setErrorEmailInput(true);
      return false;
    }

    return true;
  };

  const verifyPassword = (password: string | undefined) => {
    if (!password) {
      notify("Please Enter a Password");
      setErrorPasswordInput(true);
      return false;
    }

    return true;
  };

  const login: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!verifyEmail(email)) return;
    if (!verifyPassword(password)) return;

    signInWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}:: ${errorMessage}`);

        if (errorCode === "auth/weak-password") {
          notify("Password should be at least 6 characters long");
          setErrorPasswordInput(true);
          return;
        }
        notify("Invalid Email or Password");
        setErrorEmailInput(true);
        setErrorPasswordInput(true);
      });
  };

  const signup: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!verifyEmail(email)) return;
    if (!verifyPassword(password)) return;

    createUserWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}:: ${errorMessage}`);

        if (errorCode === "auth/weak-password") {
          notify("Password should be at least 6 characters long");
          setErrorPasswordInput(true);
          return;
        }
        notify("Invalid Email or Password");
        setErrorEmailInput(true);
        setErrorPasswordInput(true);
      });
  };

  const forgotPassword: MouseEventHandler<HTMLParagraphElement> = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    if (!verifyEmail(email)) return;

    sendPasswordResetEmail(auth, email!)
      .then(() => {
        // Password reset email sent!
        // ..
        notify("Password Reset Email sent!", { type: "success" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}:: ${errorMessage}`);
        notify("Password Reset Error");
      });
  };
  return (
    <div
      className={`flex flex-col items-ceter justify-center space-y-10 px-10`}
    >
      <SizedBox height={100} />
      <div className="m-auto w-full">
        <FullLogo />
      </div>
      <form
        className="flex flex-col justify-center space-y-10"
        onSubmit={type === SignInType.signIn ? login : signup}
      >
        <MyInput
          placeholder="Email"
          error={errorEmailInput}
          innerRef={emailRef}
          onChange={() => setErrorEmailInput(false)}
        />
        <MyInput
          placeholder="Password"
          type="password"
          error={errorPasswordInput}
          innerRef={passwordRef}
          onChange={() => setErrorPasswordInput(false)}
        />
        <MyButton
          type="submit"
          label={type === SignInType.signIn ? "LOGIN" : "SIGN UP"}
        />
      </form>
      <p
        className={`${interFont} text-link fit-content m-auto`}
        onClick={forgotPassword}
      >
        FORGOT PASSWORD&#63;
      </p>
      <div className="flex flex-row items-center justify-center">
        <p className={`${interFont} text-darker_blue fit-content m-0 text-sm`}>
          {type == SignInType.signIn
            ? "DON'T HAVE AN ACOUNT?"
            : "ALREADY HAVE AN ACCOUNT?"}
        </p>
        <SizedBox width={10} />
        <p
          onClick={toggleType}
          className={`${interFont} text-link fit-content m-0 text-sm`}
        >
          {type == SignInType.signIn ? "CREATE ONE" : "LOGIN"}
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
