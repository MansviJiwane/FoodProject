const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getAllMenus,
  createMenu,
  deleteMenu,
  addItemToMenu,
} = require("../controllers/menuController");

const { protect } = require("../controllers/authController");
const { authorizeRoles } = require("../middlewares/authorizeRoles");

router
  .route("/restaurant/:id/menu")
  // ✅ FIX: GET route was missing entirely — this is why "existing menus"
  // never showed up after clicking a restaurant. Added GET here (open to
  // everyone, no protect/admin check needed to just view menus).
  .get(getAllMenus)
  .post(protect, authorizeRoles("admin"), createMenu);

// add food item to a specific menu (more specific, must come before /:menuId)
router
  .route("/:menuId/addItem")
  .patch(protect, authorizeRoles("admin"), addItemToMenu);

router.route("/:menuId").delete(protect, authorizeRoles("admin"), deleteMenu);

module.exports = router;