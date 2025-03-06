import React from "react";
import CloseIcon from "../icons/CloseIcon"; // Replace with your actual close icon component
import NotificationItemIcon from "../icons/NotificationItemIcon"; // Replace with your notification icon component

interface NotificationSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Notification {
    id: string;
    message: string;
    time: number;
    // You can add more fields like timestamp, read status, etc.
}

const NotificationSidebar: React.FC<NotificationSidebarProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    const notifications: Notification[] = [
        {
            id: "1",
            message:
                "Get upto 3 months of premium by inviting friends to secure Passwords",
            time: 1,
        },
        {
            id: "2",
            message:
                "Get upto 3 months of premium by inviting friends to secure Passwords",
            time: 1,
        },
    ];

    return (
        <div
            className="fixed inset-0 flex bg-[#0a0a0ac7] justify-end z-50  "
            onClick={onClose}
        >
            {/* Sidebar */}
            <div
                className="w-[475px] h-screen bg-customDark-50 rounded-l-2xl p-6 absolute right-0 top-0"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[24px] font-bold text-white">
                        Notifications
                    </h2>
                    <button onClick={onClose} className="text-white">
                        <CloseIcon />
                    </button>
                </div>

                {/* Notifications List */}
                <div className="space-y-4">
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="cursor-pointer h-[73px] w-[411px]  flex items-center gap-3 bg-customDark-50 p-4 rounded-lg"
                            >
                                <div className="w-[45px] h-[45px]">
                                    <NotificationItemIcon />{" "}
                                </div>
                                <div className="pt-5  text-white text-[16px] font-medium flex flex-col">
                                    {notification.message}
                                    <span className="text-[#CCCCCC] text-[14px] font-medium mb-2">
                                        {notification.time} hour ago
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-white text-center">
                            No notifications
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationSidebar;
