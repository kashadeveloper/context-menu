import React from "react";
import "./coupon.css";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {
  FaRegCopy,
  FaList,
  FaEllipsisV,
  FaShareAlt,
  FaPen,
  FaDownload,
  FaEye
} from "react-icons/fa";
import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";

const Coupon = () => {
  const copyCoupon = (e, data) => {
    var coupon = data.copy;
    navigator.clipboard.writeText(coupon);
    alert(`Coupon code ${coupon} copied to your clipboard`);
  };

  return (
    <>
      <ContextMenuTrigger id="contextmenu">
        <div className="coupon">MI50</div>
      </ContextMenuTrigger>

      <ContextMenu id="contextmenu">
        <MenuItem onClick={() => alert("download")}>
          <FaDownload />
          <span>Download</span>
        </MenuItem>
        <MenuItem onClick={() => alert("preview")}>
          <FaEye />
          <span>Preview</span>
        </MenuItem>
        <hr color="#101113" />
        <MenuItem onClick={() => alert("copy")}>
          <FaRegCopy className="copy" />
          <span>Copy</span>
        </MenuItem>
        <MenuItem onClick={() => alert("rename")}>
          <FaPen color="gray" />
          <span>Rename</span>
        </MenuItem>
        <MenuItem onClick={() => alert("delete")}>
          <RiDeleteBin6Line className="delete" />
          <span>Delete</span>
        </MenuItem>
        <MenuItem onClick={() => alert("share")}>
          <FaShareAlt className="share" />
          <span>Share</span>
        </MenuItem>
      </ContextMenu>
    </>
  );
};

export default Coupon;
