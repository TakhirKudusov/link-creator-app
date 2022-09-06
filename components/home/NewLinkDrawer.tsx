import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setClose } from "../../redux/slicers/openModalSlicer";
import NewLinkForm from "./NewLinkForm";

const NewLinkDrawer: React.FC = () => {
  const isModalOpen = useAppSelector<boolean>(
    (state) => state.openModal.isOpen
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <Drawer
        title="New link form"
        open={isModalOpen}
        placement="left"
        onClose={() => dispatch(setClose())}
      >
        <NewLinkForm />
      </Drawer>
    </div>
  );
};

export default NewLinkDrawer;
