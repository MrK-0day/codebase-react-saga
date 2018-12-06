import { notification } from 'antd'

export const Notification = (type, description, message = 'Thông báo') => {
  notification.config({
    bottom: 0,
    duration: 1,
    placement: 'bottomRight'
  })
  notification[type]({
    message, description
  })
}
