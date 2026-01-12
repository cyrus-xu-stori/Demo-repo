import { View, Text, Image } from '@tarojs/components'
import './index.css'

/**
 * 胶囊组件 - 用于显示积分等信息
 * @param {string} icon - 图标URL
 * @param {string} text - 显示文本
 * @param {string} className - 自定义样式类
 */
export default function Capsule({ icon, text, className = '' }) {
  return (
    <View className={`capsule ${className}`}>
      {icon && (
        <View className="capsule-icon">
          <Image src={icon} className="capsule-icon-img" mode="aspectFit" />
        </View>
      )}
      <Text className="capsule-text">{text}</Text>
    </View>
  )
}
