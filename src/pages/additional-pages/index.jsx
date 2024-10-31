import Breadcrumb from "@/components/Breadcrumb";
import DeleteModal from "@/components/Modals/DeleteModal";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { column } from "./column";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdditionalPage,
  getAdditionalPages,
} from "@/store/features/additional-pages/service";
import { PagesData } from "@/store/selector";
import { Table } from "@/common";

const AdditionalPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { data: { pages = [] } = {}, isLoading } = useSelector(PagesData) || {};

  const confirmDelete = async () => {
    await dispatch(deleteAdditionalPage(deleteId));
    await dispatch(getAdditionalPages());
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(getAdditionalPages());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/additional-pages/create")}>
          Add New
        </Button>
      </div>
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={column(handleDelete)}
          data={pages}
          isPendding={isLoading}
        />
      </div>

      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={confirmDelete}
      />
    </DefaultLayout>
  );
};

export default AdditionalPages;
