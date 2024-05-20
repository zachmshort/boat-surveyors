interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, icon }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 
          py-3 
          hover:shadow-md
          font-semibold
          text-sm
          lg:text-lg
          flex
          items-center
          mi"
    >
      <div className="mr-2 text-3xl">{icon}</div>
      {label}
    </div>
  );
};

export default MenuItem;
