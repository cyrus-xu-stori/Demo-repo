import { View, Text, Image } from '@tarojs/components'
import { useLoad, navigateBack } from '@tarojs/taro'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Capsule from '../../components/Capsule'
import RewardIcon from '../../components/RewardIcon'
import './index.scss'

// 图片资源（从 Figma 设计稿中获取）
const imgBack = 'http://localhost:3845/assets/b0e6ce0d4c0d21a83f5bba729a6da7ae94f4012d.svg'
const imgMore = 'http://localhost:3845/assets/df9a6925605c6d1b8150d4bb7822aaec390c4c03.svg'
const imgCoins = 'http://localhost:3845/assets/1f656f34a37b385ebc39dbb8654cbf796dda29c0.svg'
const imgTreasure = 'http://localhost:3845/assets/82540ae261b5e67f3e65c0ea6947f5d8ff625e07.png'
const imgBomb = 'http://localhost:3845/assets/476b70d2b8444ead259c19725d4b97517406bfac.svg'
const imgLightning = 'http://localhost:3845/assets/ef9fe8dffcfed8295c443ab55d20d8798133a688.svg'
const imgShield = 'http://localhost:3845/assets/dd77faea7d83ac37aa4c23b7912c2541666fde8e.svg'
const imgLink = 'http://localhost:3845/assets/5e1e91e3e0c04075bbe46771a6788398ea7d5283.svg'
const imgArrow = 'http://localhost:3845/assets/a889bb14397b9c00d5916d1d37f6b3d86630366d.svg'

export default function Index() {
  useLoad(() => {
    console.log('盲盒开启页加载完成')
  })

  const handleBack = () => {
    navigateBack()
  }

  const handleGoToChoque = () => {
    // 跳转到 Choque Choque 页面
    console.log('跳转到 Choque Choque')
  }

  const handleBackToCheckin = () => {
    // 返回签到页
    navigateBack()
  }

  return (
    <View className="blind-box-page">
      {/* 背景 */}
      <View className="page-background">
        {/* 头部导航 */}
        <View className="header">
          <View className="header-back" onClick={handleBack}>
            <Image src={imgBack} className="header-icon" mode="aspectFit" />
          </View>
          <Text className="header-title">Daily Check-in</Text>
          <View className="header-more">
            <Image src={imgMore} className="header-icon" mode="aspectFit" />
          </View>
        </View>

        {/* 积分胶囊 */}
        <View className="points-section">
          <Capsule icon={imgCoins} text="125 Points" />
        </View>

        {/* 主内容卡片 */}
        <View className="content-section">
          <Card>
            {/* 标题 */}
            <View className="card-header">
              <Text className="card-title">¡Felicidades!</Text>
              <Text className="card-subtitle">Has recibido tu caja sorpresa diaria</Text>
            </View>

            {/* 盲盒图片 */}
            <View className="treasure-box-container">
              <View className="treasure-box">
                <View className="treasure-box-inner">
                  <Image src={imgTreasure} className="treasure-img" mode="aspectFit" />
                </View>
                <View className="treasure-box-glow treasure-box-glow-1" />
                <View className="treasure-box-glow treasure-box-glow-2" />
              </View>
            </View>

            {/* 奖励图标 */}
            <View className="reward-icons">
              <RewardIcon icon={imgBomb} gradient="orange" />
              <RewardIcon icon={imgLightning} gradient="blue" />
              <RewardIcon icon={imgShield} gradient="green" />
            </View>

            {/* 积分奖励提示 */}
            <View className="points-reward">
              <Text className="points-reward-text">+1 Punto</Text>
            </View>

            {/* 操作按钮 */}
            <View className="action-buttons">
              <Button
                type="primary"
                icon={imgLink}
                text="Ir a Choque Choque"
                onClick={handleGoToChoque}
                className="action-button"
              />
              <Button
                type="secondary"
                icon={imgArrow}
                text="Volver al Check-in"
                onClick={handleBackToCheckin}
                className="action-button"
              />
            </View>
          </Card>
        </View>
      </View>
    </View>
  )
}
