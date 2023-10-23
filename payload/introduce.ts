import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '확장성있는 DB와 RESTful API 설계를 항상 고민하는 7년 경력의 백엔드 개발자입니다.',

    '새로운 기술을 배우거나 도입하는것에 있어 두려움이 없으며, 팀원간 코드 리뷰를 통해 개발 성과와 퍼포먼스를 높이는것을 지향합니다. 회사와 서비스의 성장이 곧 나의 성장이라는 생각으로, 개발자 이면서도 사용자의 입장에서 항상 더 나은 서비스를 위해 고민합니다. 팀 내에서 원활한 소통을 중요시하며, 팀원들과의 협업을 통해 팀의 성장과 발전을 목표로 합니다.'
  ],
  sign: 'yh',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
