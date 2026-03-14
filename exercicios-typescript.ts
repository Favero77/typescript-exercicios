// 1️⃣ Calcular IMC
function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

// 2️⃣ Formatar nome
function formatarNome(nome: string, sobrenome?: string): string {
  return sobrenome ? `${nome} ${sobrenome}` : nome;
}

// 3️⃣ Verificar maioridade
function verificarMaioridade(idade: number): boolean {
  return idade >= 18;
}

// 4️⃣ Interface Produto
interface Produto {
  id: number
  nome: string
  preco: number
  descricao?: string
}

function formatarProduto(produto: Produto): string {
  return `${produto.nome} - R$ ${produto.preco}`
}

// 5️⃣ Filtrar números pares
function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(n => n % 2 === 0)
}

// 6️⃣ Converter temperatura
type UnidadeTemperatura = "celsius" | "fahrenheit"

function converterTemperatura(
  valor: number,
  unidade: UnidadeTemperatura
): number {

  if (unidade === "celsius") {
    return (valor * 9/5) + 32
  }

  return (valor - 32) * 5/9
}

// 7️⃣ Contar ocorrências
function contarOcorrencias<T>(array: T[], elemento: T): number {

  let contador = 0

  for (const item of array) {
    if (item === elemento) {
      contador++
    }
  }

  return contador
}

// 8️⃣ Interface Aluno
interface Aluno {
  nome: string
  notas: number[]
  matricula: string
}

function calcularMedia(aluno: Aluno): number {

  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0)

  return soma / aluno.notas.length
}

// 9️⃣ API Response genérica
type ApiResponse<T> = {
  sucesso: boolean
  dados: T | null
  erro: string | null
}

interface Usuario {
  id: number
  nome: string
  email: string
}

function buscarUsuarios(): ApiResponse<Usuario[]> {

  const usuarios: Usuario[] = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" }
  ]

  return {
    sucesso: true,
    dados: usuarios,
    erro: null
  }
}

// 🔟 Tipagem componente React Native
import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"

interface Tarefa {
  id: number
  titulo: string
  concluida: boolean
}

interface ListaTarefasProps {
  tarefas: Tarefa[]
  onToggle: (id: number) => void
}

export default function ListaTarefas({
  tarefas,
  onToggle
}: ListaTarefasProps) {

  const [filtro, setFiltro] = useState<
    "todas" | "pendentes" | "concluidas"
  >("todas")

  const tarefasFiltradas = tarefas.filter(tarefa => {

    if (filtro === "pendentes") {
      return !tarefa.concluida
    }

    if (filtro === "concluidas") {
      return tarefa.concluida
    }

    return true
  })

  return (
    <View>
      {tarefasFiltradas.map(tarefa => (
        <TouchableOpacity
          key={tarefa.id}
          onPress={() => onToggle(tarefa.id)}
        >
          <Text>
            {tarefa.titulo} - {tarefa.concluida ? "✅" : "⏳"}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
