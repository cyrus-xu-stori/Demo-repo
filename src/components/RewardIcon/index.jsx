import { View, Image } from '@tarojs/components'
import './index.css'

/**
 * 奖励图标组件
 * @param {string} icon - 图标URL
 * @param {string} gradient - 渐变颜色: 'orange' | 'blue' | 'green'
 * @param {string} className - 自定义样式类
 */
export default function RewardIcon({ icon, gradient = 'orange', className = '' }) {
  const gradientClass = `reward-icon reward-icon-${gradient} ${className}`
  
  return (
    <View className={gradientClass}>
      <View className="reward-icon-inner">
        <Image src={icon} className="reward-icon-img" mode="aspectFit" />
      </View>
    </View>
  )
}
