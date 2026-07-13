import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createMenu } from "../redux/actions/menuActions";

const CreateMenu = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const { creatingMenu, createMenuError } = useSelector((state) => state.menus);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.trim()) return;

    const result = await dispatch(
      createMenu({ restaurantId: storeId, category })
    );

    if (createMenu.fulfilled.match(result)) {
      navigate(`/eats/stores/${storeId}/menus`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Menu</h2>
      <p>Restaurant ID: {storeId}</p>

      {createMenuError && <p className="text-danger">{createMenuError}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Menu Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="btn btn-success mt-3" disabled={creatingMenu}>
          {creatingMenu ? "Creating..." : "Create Menu"}
        </button>
      </form>
    </div>
  );
};

export default CreateMenu;