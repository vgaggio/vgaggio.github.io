import clsx from "clsx";

const AppScreen = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col", className)} {...props}>
      
      {children}

    </div>
  );
};

export default AppScreen;
