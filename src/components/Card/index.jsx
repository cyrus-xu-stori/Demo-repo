import { View } from '@tarojs/components'
import './index.css'

/**
 * 卡片组件
 * @param {React.ReactNode} children - 子元素
 * @param {string} className - 自定义样式类
 */
export default function Card({ children, className = '' }) {
  return (
    <View className={`card ${className}`}>
      {children}
    </View>
  )
}
