import { View, Text, Image } from '@tarojs/components'
import './index.css'

/**
 * 按钮组件
 * @param {string} type - 按钮类型: 'primary' | 'secondary'
 * @param {string} icon - 图标URL（可选）
 * @param {string} text - 按钮文本
 * @param {function} onClick - 点击事件
 * @param {string} className - 自定义样式类
 */
export default function Button({ type = 'primary', icon, text, onClick, className = '' }) {
  const buttonClass = `button button-${type} ${className}`
  
  return (
    <View className={buttonClass} onClick={onClick}>
      {icon && (
        <View className="button-icon">
          <Image src={icon} className="button-icon-img" mode="aspectFit" />
        </View>
      )}
      <Text className="button-text">{text}</Text>
    </View>
  )
}
