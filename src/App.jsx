import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Instagram, Calculator, Save, Copy, Calendar, Plus, X, Trash2, Edit } from 'lucide-react'
import './App.css'

// Array de frases inspiradoras para el equipo de fitness
const inspirationalQuotes = [
  // Frases originales
  {
    text: "El éxito representa el 1% de tu trabajo, y es el resultado del otro 99%, que llamamos fracaso",
    author: "Soichiro Honda - Fundador de Honda"
  },
  {
    text: "La disciplina es el puente entre las metas y los logros",
    author: "Jim Rohn"
  },
  {
    text: "No es que sea muy inteligente, es que me quedo más tiempo con los problemas",
    author: "Albert Einstein"
  },
  {
    text: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario",
    author: "Vidal Sassoon"
  },
  {
    text: "La diferencia entre lo imposible y lo posible está en la determinación",
    author: "Tommy Lasorda"
  },
  {
    text: "Cada día es una nueva oportunidad para ser mejor que ayer",
    author: "Desconocido"
  },
  {
    text: "El progreso no es casualidad, es el resultado de un esfuerzo constante",
    author: "Mahatma Gandhi"
  },
  {
    text: "La consistencia es más importante que la perfección",
    author: "Desconocido"
  },
  {
    text: "Tu cuerpo puede soportar casi cualquier cosa, es tu mente la que necesitas convencer",
    author: "Desconocido"
  },
  {
    text: "El fitness no es un destino, es un estilo de vida",
    author: "Desconocido"
  },
  {
    text: "Los pequeños progresos diarios son la clave del éxito a largo plazo",
    author: "Robert Collier"
  },
  {
    text: "La motivación te hace empezar, el hábito te hace continuar",
    author: "Jim Ryun"
  },
  {
    text: "No cuentes los días, haz que los días cuenten",
    author: "Muhammad Ali"
  },
  {
    text: "El esfuerzo de hoy es la inversión del mañana",
    author: "Desconocido"
  },
  {
    text: "La excelencia no es una habilidad, es una actitud",
    author: "Ralph Marston"
  },
  // Frases de David Goggins
  {
    text: "No puedes crecer sin dolor. No puedes ganar sin sufrimiento. No puedes cambiar sin incomodidad",
    author: "David Goggins"
  },
  {
    text: "La mente es la herramienta más poderosa que tienes. Úsala para tu beneficio, no para tu destrucción",
    author: "David Goggins"
  },
  {
    text: "No te rindas cuando estés cansado. Ríndete cuando hayas terminado",
    author: "David Goggins"
  },
  {
    text: "El dolor es temporal. El orgullo es para siempre",
    author: "David Goggins"
  },
  {
    text: "No puedes cambiar tu pasado, pero puedes cambiar tu futuro",
    author: "David Goggins"
  },
  {
    text: "La disciplina es la diferencia entre lo que quieres ahora y lo que quieres más",
    author: "David Goggins"
  },
  // Otras frases motivacionales
  {
    text: "No te rindas. Sufre ahora y vive el resto de tu vida como un campeón",
    author: "Muhammad Ali"
  },
  {
    text: "El dolor es temporal. Puede durar un minuto, una hora, un día, o un año, pero eventualmente se detendrá y algo más tomará su lugar. Si me rindo, sin embargo, durará para siempre",
    author: "Lance Armstrong"
  },
  {
    text: "Si quieres algo que nunca has tenido, debes estar dispuesto a hacer algo que nunca has hecho",
    author: "Thomas Jefferson"
  },
  {
    text: "El éxito no es final, el fracaso no es fatal: es el coraje para continuar lo que cuenta",
    author: "Winston Churchill"
  },
  {
    text: "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra",
    author: "Jimmy Johnson"
  },
  {
    text: "No hay ascensor al éxito, tienes que tomar las escaleras",
    author: "Zig Ziglar"
  },
  {
    text: "El futuro pertenece a quienes creen en la belleza de sus sueños",
    author: "Eleanor Roosevelt"
  },
  {
    text: "La única manera de hacer un gran trabajo es amar lo que haces",
    author: "Steve Jobs"
  },
  {
    text: "No importa qué tan lento vayas, siempre y cuando no te detengas",
    author: "Confucio"
  },
  {
    text: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo",
    author: "Winston Churchill"
  },
  {
    text: "La mente es todo. Lo que piensas te conviertes en eso",
    author: "Buda"
  },
  {
    text: "El único límite para nuestros logros de mañana serán nuestras dudas de hoy",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "La vida es 10% lo que te pasa y 90% cómo reaccionas a ello",
    author: "Charles R. Swindoll"
  },
  {
    text: "No puedes cambiar tu destino, pero puedes cambiar tu dirección",
    author: "Jim Rohn"
  },
  {
    text: "El coraje no es la ausencia de miedo, sino el juicio de que algo más es más importante que el miedo",
    author: "Ambrose Redmoon"
  },
  {
    text: "La persistencia es muy importante. No debes renunciar a menos que te veas forzado a renunciar",
    author: "Elon Musk"
  },
  {
    text: "La calidad no es un acto, es un hábito",
    author: "Aristóteles"
  },
  {
    text: "El verdadero test no es si evitas el fracaso, porque no lo harás. Es si dejas que te endurezca o te avergüence en la inacción, o si aprendes de él",
    author: "Barack Obama"
  },
  {
    text: "No hay atajos para cualquier lugar que valga la pena ir",
    author: "Beverly Sills"
  },
  {
    text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día",
    author: "Robert Collier"
  },
  {
    text: "La determinación de hoy es el éxito de mañana",
    author: "Robert H. Schuller"
  },
  {
    text: "No hay sustituto para el trabajo duro",
    author: "Thomas Edison"
  },
  {
    text: "La excelencia es un hábito, no un acto",
    author: "Aristóteles"
  }
]

function App() {
  // Estados para datos fijos (guardados en caché)
  const [accountData, setAccountData] = useState({
    handler: '',
    link: ''
  })

  // Estado para validación de enlace
  const [linkError, setLinkError] = useState('')

  // Estados para gestión de múltiples cuentas
  const [savedAccounts, setSavedAccounts] = useState([])
  const [selectedAccountId, setSelectedAccountId] = useState('')
  const [showAddAccount, setShowAddAccount] = useState(false)
  const [editingAccountId, setEditingAccountId] = useState('')

  // Estados para métricas diarias
  const [dailyMetrics, setDailyMetrics] = useState({
    videosUploaded: '',
    videosReady: '',
    ideasReady: '',
    visits: '',
    profileClicks: '',
    linkClicks: ''
  })

  // Estado para fecha de reporte
  const [reportDate, setReportDate] = useState('')

  // Estados para cálculos automáticos
  const [calculations, setCalculations] = useState({
    visitToProfileConversion: 0,
    profileToLinkConversion: 0
  })

  // Estado para comentarios
  const [comments, setComments] = useState({
    bien: '',
    mejorar: '',
    bloqueos: ''
  })

  // Estado para frase del día
  const [dailyQuote, setDailyQuote] = useState({
    text: '',
    author: ''
  })

  // Cargar datos del localStorage al inicializar
  useEffect(() => {
    // Cargar cuentas guardadas
    const savedAccountsData = localStorage.getItem('instagram-saved-accounts')
    if (savedAccountsData) {
      const accounts = JSON.parse(savedAccountsData)
      setSavedAccounts(accounts)
      
      // Si hay cuentas guardadas, seleccionar la primera por defecto
      if (accounts.length > 0) {
        setSelectedAccountId(accounts[0].id)
        setAccountData({
          handler: accounts[0].handler,
          link: accounts[0].link
        })
      }
    }

    // Calcular fecha de reporte (fecha actual - 1 día)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    
    // Formatear fecha como DD/MM/YY
    const day = yesterday.getDate().toString().padStart(2, '0')
    const month = (yesterday.getMonth() + 1).toString().padStart(2, '0')
    const year = yesterday.getFullYear().toString().slice(-2)
    const formattedDate = `${day}/${month}/${year}`
    
    setReportDate(formattedDate)

    // Seleccionar frase del día basada en la fecha actual
    const currentDate = new Date()
    const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    const quoteIndex = dayOfYear % inspirationalQuotes.length
    const selectedQuote = inspirationalQuotes[quoteIndex]
    setDailyQuote(selectedQuote)
    
    // Cargar frase del día de manera asíncrona
    setTimeout(() => {
      const quoteTextElement = document.getElementById('quote-text')
      const quoteAuthorElement = document.getElementById('quote-author')
      if (quoteTextElement && quoteAuthorElement) {
        quoteTextElement.textContent = selectedQuote.text
        quoteAuthorElement.textContent = `— ${selectedQuote.author}`
      }
    }, 100)
  }, [])

  // Calcular conversiones automáticamente cuando cambien las métricas
  useEffect(() => {
    const visits = parseFloat(dailyMetrics.visits) || 0
    const profileClicks = parseFloat(dailyMetrics.profileClicks) || 0
    const linkClicks = parseFloat(dailyMetrics.linkClicks) || 0

    const visitToProfile = visits > 0 ? (profileClicks / visits) * 100 : 0
    const profileToLink = profileClicks > 0 ? (linkClicks / profileClicks) * 100 : 0

    setCalculations({
      visitToProfileConversion: visitToProfile,
      profileToLinkConversion: profileToLink
    })
  }, [dailyMetrics.visits, dailyMetrics.profileClicks, dailyMetrics.linkClicks])



  // Editar cuenta existente
  const editAccount = (accountId) => {
    const account = savedAccounts.find(acc => acc.id === accountId)
    if (account) {
      setEditingAccountId(accountId)
      setAccountData({
        handler: account.handler,
        link: account.link
      })
      setShowAddAccount(true)
    }
  }

  // Guardar cambios de cuenta editada
  const saveEditedAccount = () => {
    if (!accountData.handler || !accountData.link) {
      alert('Por favor, completa todos los campos de la cuenta')
      return
    }

    if (!validateInstagramLink(accountData.link)) {
      alert('Por favor, corrige el formato del enlace')
      return
    }

    const updatedAccounts = savedAccounts.map(account => 
      account.id === editingAccountId 
        ? { ...account, handler: accountData.handler, link: accountData.link }
        : account
    )

    setSavedAccounts(updatedAccounts)
    localStorage.setItem('instagram-saved-accounts', JSON.stringify(updatedAccounts))
    
    // Si estamos editando la cuenta seleccionada, mantenerla seleccionada
    if (selectedAccountId === editingAccountId) {
      setSelectedAccountId(editingAccountId)
    }
    
    setEditingAccountId('')
    setShowAddAccount(false)
    setLinkError('')
    alert('Cuenta actualizada exitosamente')
  }

  // Añadir nueva cuenta
  const addNewAccount = () => {
    if (editingAccountId) {
      saveEditedAccount()
      return
    }

    if (!accountData.handler || !accountData.link) {
      alert('Por favor, completa todos los campos de la cuenta')
      return
    }

    if (!validateInstagramLink(accountData.link)) {
      alert('Por favor, corrige el formato del enlace')
      return
    }

    const newAccount = {
      id: Date.now().toString(),
      handler: accountData.handler,
      link: accountData.link
    }

    const updatedAccounts = [...savedAccounts, newAccount]
    setSavedAccounts(updatedAccounts)
    setSelectedAccountId(newAccount.id)
    localStorage.setItem('instagram-saved-accounts', JSON.stringify(updatedAccounts))
    setShowAddAccount(false)
    setLinkError('')
    alert('Cuenta añadida exitosamente')
  }

  // Seleccionar cuenta existente
  const selectAccount = (accountId) => {
    const account = savedAccounts.find(acc => acc.id === accountId)
    if (account) {
      setSelectedAccountId(accountId)
      setAccountData({
        handler: account.handler,
        link: account.link
      })
    }
  }

  // Eliminar cuenta
  const deleteAccount = (accountId) => {
    if (savedAccounts.length <= 1) {
      alert('Debes mantener al menos una cuenta')
      return
    }

    const updatedAccounts = savedAccounts.filter(acc => acc.id !== accountId)
    setSavedAccounts(updatedAccounts)
    localStorage.setItem('instagram-saved-accounts', JSON.stringify(updatedAccounts))

    // Si se eliminó la cuenta seleccionada, seleccionar la primera disponible
    if (selectedAccountId === accountId && updatedAccounts.length > 0) {
      setSelectedAccountId(updatedAccounts[0].id)
      setAccountData({
        handler: updatedAccounts[0].handler,
        link: updatedAccounts[0].link
      })
    }

    alert('Cuenta eliminada exitosamente')
  }

  // Cancelar añadir cuenta
  const cancelAddAccount = () => {
    setShowAddAccount(false)
    setEditingAccountId('')
    setLinkError('')
    // Restaurar datos de la cuenta seleccionada
    if (selectedAccountId) {
      const account = savedAccounts.find(acc => acc.id === selectedAccountId)
      if (account) {
        setAccountData({
          handler: account.handler,
          link: account.link
        })
      }
    } else {
      setAccountData({ handler: '', link: '' })
    }
  }

  // Generar reporte formateado
  const generateReport = () => {
    const report = `Reporte ${reportDate}

Cuenta: @${accountData.handler}
Enlace: ${accountData.link}

1. Videos subidos 24 h: ${dailyMetrics.videosUploaded}
2. Videos editados listos total: ${dailyMetrics.videosReady}
3. Ideas listas para editar total: ${dailyMetrics.ideasReady}
4. Visitas 24 h: ${dailyMetrics.visits}
5. Clicks perfil 24 h: ${dailyMetrics.profileClicks}
6. Clicks enlace 24 h: ${dailyMetrics.linkClicks}
7. Conversión de Visitas a visitas al perfil 24 h: ${calculations.visitToProfileConversion.toFixed(2)}%
8. Conversión de Clicks Perfil a toques en enlace externo 24 h: ${calculations.profileToLinkConversion.toFixed(2)}%

🔎 Comentario:
- Bien: ${comments.bien}
- A mejorar: ${comments.mejorar}
- Bloqueos / peticiones: ${comments.bloqueos}`

    return report
  }

  // Validar formato de enlace de Instagram
  const validateInstagramLink = (link) => {
    if (!link) {
      setLinkError('')
      return true
    }
    
    if (link.length > 55) {
      setLinkError('El enlace no puede tener más de 55 caracteres')
      return false
    }
    
    if (!link.startsWith('https://www.instagram.com/')) {
      setLinkError('El enlace debe comenzar con https://www.instagram.com/')
      return false
    }
    
    setLinkError('')
    return true
  }

  // Copiar reporte al portapapeles
  const copyReport = async () => {
    try {
      await navigator.clipboard.writeText(generateReport())
      alert('Reporte copiado al portapapeles')
    } catch (err) {
      console.error('Error al copiar:', err)
      alert('Error al copiar el reporte')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-600" />
            <h1 className="text-3xl font-bold text-gray-900">Reporte Diario Instagram</h1>
          </div>
          <p className="text-gray-600">Calcula automáticamente las métricas de rendimiento de tu cuenta</p>
        </div>

        {/* Fecha del Reporte */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Fecha del Reporte
            </CardTitle>
            <CardDescription>
              Se calcula automáticamente como el día anterior, pero puedes editarla si es necesario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="reportDate">Fecha del Reporte (DD/MM/YY)</Label>
              <Input
                id="reportDate"
                placeholder="DD/MM/YY"
                value={reportDate}
                onChange={(e) => setReportDate(e.target.value)}
                className="max-w-xs"
              />
            </div>
          </CardContent>
        </Card>

        {/* Gestión de Múltiples Cuentas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Save className="h-5 w-5" />
              Cuentas de Instagram
            </CardTitle>
            <CardDescription>
              Gestiona múltiples cuentas de Instagram guardadas en caché local
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Selector de cuentas existentes */}
            {savedAccounts.length > 0 && !showAddAccount && (
              <div className="space-y-4">
                <Label>Seleccionar Cuenta</Label>
                <div className="grid gap-2 w-full">
                  {savedAccounts.map((account) => (
                    <div
                      key={account.id}
                      className={`flex items-center justify-between p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors w-full max-w-full ${
                        selectedAccountId === account.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => selectAccount(account.id)}
                    >
                      <div className="flex-1 min-w-0 pr-2 sm:pr-3">
                        <p className="font-medium truncate text-sm sm:text-base">@{account.handler}</p>
                        <p className="text-xs sm:text-sm text-gray-500 link-truncate" title={account.link}>
                          {account.link}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            editAccount(account.id)
                          }}
                          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 h-6 w-6 sm:h-8 sm:w-8 p-0"
                        >
                          <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteAccount(account.id)
                          }}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-6 w-6 sm:h-8 sm:w-8 p-0"
                        >
                          <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formulario para añadir nueva cuenta */}
            {showAddAccount && (
              <div className="space-y-4 border-t pt-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">
                    {editingAccountId ? 'Editar Cuenta' : 'Añadir Nueva Cuenta'}
                  </Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={cancelAddAccount}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newHandler">Usuario de Instagram</Label>
                    <Input
                      id="newHandler"
                      placeholder="@tu_usuario"
                      value={accountData.handler}
                      onChange={(e) => {
                        setAccountData({...accountData, handler: e.target.value})
                      }}

                                                                                             
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newLink">Enlace de la Cuenta</Label>
                    <Input
                      id="newLink"
                      placeholder="https://www.instagram.com/tu_usuario"
                      value={accountData.link}
                      onChange={(e) => {
                        const newValue = e.target.value
                        if (newValue.length <= 55) {
                          setAccountData({...accountData, link: newValue})
                          validateInstagramLink(newValue)
                        }
                      }}

                      className={`w-full ${linkError ? 'border-red-500' : ''}`}
                      maxLength={55}
                    />
                    {linkError && (
                      <p className="text-xs text-red-500 mt-1">{linkError}</p>
                    )}
                    <p className="text-xs text-gray-500">
                      {accountData.link.length}/55 caracteres
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={addNewAccount} className="flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    {editingAccountId ? 'Actualizar Cuenta' : 'Guardar Cuenta'}
                  </Button>
                  <Button variant="outline" onClick={cancelAddAccount}>
                    Cancelar
                  </Button>
                </div>
              </div>
            )}

            {/* Botón para añadir nueva cuenta */}
            {!showAddAccount && (
              <Button
                onClick={() => setShowAddAccount(true)}
                variant="outline"
                className="w-full border-dashed border-2 hover:border-gray-400"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                  <span>Añadir Nueva Cuenta</span>
                </div>
              </Button>
            )}

            {/* Mostrar cuenta seleccionada actual */}
            {selectedAccountId && !showAddAccount && (
              <div className="mt-4 p-2 sm:p-3 bg-gray-50 rounded-lg w-full max-w-full">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Cuenta Activa:</p>
                <p className="font-medium truncate text-sm sm:text-base">@{accountData.handler}</p>
                <p className="text-xs sm:text-sm text-gray-500 link-truncate" title={accountData.link}>
                  {accountData.link}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Métricas Diarias */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Métricas Diarias
            </CardTitle>
            <CardDescription>
              Ingresa los datos del día actual
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="videosUploaded">Videos subidos 24h</Label>
                <Input
                  id="videosUploaded"
                  type="number"
                  placeholder="0"
                  value={dailyMetrics.videosUploaded}
                  onChange={(e) => setDailyMetrics({...dailyMetrics, videosUploaded: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="videosReady">Videos editados listos total</Label>
                <Input
                  id="videosReady"
                  type="number"
                  placeholder="0"
                  value={dailyMetrics.videosReady}
                  onChange={(e) => setDailyMetrics({...dailyMetrics, videosReady: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ideasReady">Ideas listas para editar total</Label>
                <Input
                  id="ideasReady"
                  type="number"
                  placeholder="0"
                  value={dailyMetrics.ideasReady}
                  onChange={(e) => setDailyMetrics({...dailyMetrics, ideasReady: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="visits">Visitas 24h</Label>
                <Input
                  id="visits"
                  type="number"
                  placeholder="0"
                  value={dailyMetrics.visits}
                  onChange={(e) => setDailyMetrics({ ...dailyMetrics, visits: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profileClicks">Clicks perfil 24h</Label>
                <Input
                  id="profileClicks"
                  type="number"
                  placeholder="0"
                  value={dailyMetrics.profileClicks}
                  onChange={(e) => setDailyMetrics({...dailyMetrics, profileClicks: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkClicks">Clicks enlace 24h</Label>
                <Input
                  id="linkClicks"
                  type="number"
                  placeholder="0"
                  value={dailyMetrics.linkClicks}
                  onChange={(e) => setDailyMetrics({...dailyMetrics, linkClicks: e.target.value})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cálculos Automáticos */}
        <Card>
          <CardHeader>
            <CardTitle>Cálculos Automáticos</CardTitle>
            <CardDescription>
              Estos valores se calculan automáticamente basados en las métricas ingresadas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Conversión Visitas → Perfil</h3>
                <p className="text-2xl font-bold text-blue-700">
                  {calculations.visitToProfileConversion.toFixed(2)}%
                </p>
                <p className="text-sm text-blue-600 mt-1">
                  (Clicks perfil / Visitas) × 100
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Conversión Perfil → Enlace</h3>
                <p className="text-2xl font-bold text-green-700">
                  {calculations.profileToLinkConversion.toFixed(2)}%
                </p>
                <p className="text-sm text-green-600 mt-1">
                  (Clicks enlace / Clicks perfil) × 100
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comentarios */}
        <Card>
          <CardHeader>
            <CardTitle>Comentarios</CardTitle>
            <CardDescription>
              Agrega observaciones para cada sección
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="bien" className="mb-2 block">Bien:</Label>
              <Input
                id="bien"
                placeholder="¿Qué salió bien?"
                value={comments.bien}
                onChange={e => setComments({ ...comments, bien: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="mejorar" className="mb-2 block">A mejorar:</Label>
              <Input
                id="mejorar"
                placeholder="¿Qué se puede mejorar?"
                value={comments.mejorar}
                onChange={e => setComments({ ...comments, mejorar: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="bloqueos" className="mb-2 block">Bloqueos / peticiones:</Label>
              <Input
                id="bloqueos"
                placeholder="¿Hubo bloqueos o peticiones?"
                value={comments.bloqueos}
                onChange={e => setComments({ ...comments, bloqueos: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Reporte Generado */}
        <Card>
          <CardHeader>
            <CardTitle>Reporte Generado</CardTitle>
            <CardDescription>
              Vista previa del reporte final
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm whitespace-pre-line mb-4">
              {generateReport()}
            </div>
            <Button onClick={copyReport} className="w-full">
              <Copy className="h-4 w-4 mr-2" />
              Copiar Reporte al Portapapeles
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App

