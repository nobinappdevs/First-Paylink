import React, { useState } from 'react';
import { Bell, X, Check, AlertCircle, Info, Trash2 } from 'lucide-react';

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(true);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: 'Your profile has been successfully updated',
      type: 'success',
      time: '2 minutes ago',
      read: false,
      icon: 'success'
    },
    {
      id: 2,
      text: 'New message from Sarah Johnson',
      type: 'info',
      time: '15 minutes ago',
      read: false,
      icon: 'info'
    },
    {
      id: 3,
      text: 'Your subscription will expire in 3 days',
      type: 'warning',
      time: '1 hour ago',
      read: false,
      icon: 'warning'
    },
    {
      id: 4,
      text: 'Password change request detected',
      type: 'warning',
      time: '3 hours ago',
      read: true,
      icon: 'warning'
    },
    {
      id: 5,
      text: 'New feature available: Dark mode',
      type: 'info',
      time: '1 day ago',
      read: true,
      icon: 'info'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteNotification = (id, e) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getIcon = (type) => {
    switch(type) {
      case 'success':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getIconBg = (type) => {
    switch(type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-amber-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8 flex items-start justify-center pt-20">
      <div className="relative">
        {/* Bell Icon Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Bell className="w-6 h-6 text-slate-700" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
            {/* Header */}
            <div className="bg-linear-to-r from-teal-500 to-teal-600 px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Notifications</h3>
                  <p className="text-teal-100 text-xs mt-0.5">
                    {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
                  </p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Actions */}
            {notifications.length > 0 && (
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex gap-2">
                <button 
                  onClick={markAllAsRead}
                  className="text-xs text-teal-600 hover:text-teal-700 font-medium hover:bg-teal-50 px-3 py-1.5 rounded-lg transition"
                >
                  Mark all read
                </button>
                <button 
                  onClick={clearAll}
                  className="text-xs text-slate-600 hover:text-slate-700 font-medium hover:bg-slate-100 px-3 py-1.5 rounded-lg transition"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-5">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                    <Bell className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-500 text-sm font-medium">No notifications</p>
                  <p className="text-slate-400 text-xs mt-1">Youre all caught up!</p>
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => markAsRead(notif.id)}
                    className={`px-5 py-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-all duration-200 group ${
                      !notif.read ? 'bg-teal-50/30' : ''
                    }`}
                  >
                    <div className="flex gap-3">
                      {/* Icon */}
                      <div className={`shrink-0 w-10 h-10 ${getIconBg(notif.type)} rounded-full flex items-center justify-center`}>
                        {getIcon(notif.type)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className={`text-sm ${!notif.read ? 'font-semibold text-slate-800' : 'text-slate-600'} leading-relaxed`}>
                            {notif.text}
                          </p>
                          {!notif.read && (
                            <span className="shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-1.5"></span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <p className="text-xs text-slate-500">{notif.time}</p>
                          <button
                            onClick={(e) => deleteNotification(notif.id, e)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-slate-400 hover:text-red-500 transition" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-200">
                <button className="w-full text-center text-sm font-medium text-teal-600 hover:text-teal-700 py-2 hover:bg-teal-50 rounded-lg transition">
                  View all notifications
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}